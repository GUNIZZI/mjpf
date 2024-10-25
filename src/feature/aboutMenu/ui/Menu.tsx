import { useRef, useEffect, useState } from 'react';

import gsap from 'gsap';

import { usePageContext } from '@/app/provider/usePageContext';

import { Style } from './Menu.css';

interface OwnProps {
    value: [number | null, React.Dispatch<React.SetStateAction<number | null>>];
}

const menuItems = [
    { idx: 0, name: 'Experience', value: 5 },
    { idx: 1, name: 'Skill', value: 3 },
    { idx: 2, name: 'Education', value: 4 },
];

const Menu = ({ value }: OwnProps) => {
    // const navigate = useNavigate();
    const [selectIdx, setSelectIdx] = value;
    const [overIdx, setOverIdx] = useState<number | null>(null);
    const menuRefs = useRef<Array<HTMLLIElement | null>>([]);
    const { targetUrl } = usePageContext();

    // init Animation
    useEffect(() => {
        gsap.fromTo(
            menuRefs.current,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power4.out',
            },
        );
    }, []);

    // Out Animation
    useEffect(() => {
        if (targetUrl && menuRefs.current) {
            gsap.to(menuRefs.current, {
                opacity: 0,
                y: -40,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power4.in',
            });
        }
    }, [targetUrl]);

    // 오버 메뉴
    useEffect(() => {
        menuRefs.current.forEach((menuRef, index) => {
            if (menuRef) {
                const selector = menuRef.querySelectorAll('.selector > span');
                if (index === overIdx && index !== selectIdx) {
                    gsap.to(selector, {
                        fontSize: '1.15em',
                        duration: 0.4,
                        stagger: 0.03,
                        ease: 'power3.inOut',
                    });
                } else {
                    gsap.to(selector, {
                        fontSize: '1em',
                        duration: 0.4,
                        stagger: 0.03,
                        ease: 'power3.inOut',
                    });
                }
            }
        });
    }, [overIdx]);

    // 선택 메뉴
    useEffect(() => {
        menuRefs.current.forEach((menuRef, index) => {
            if (menuRef) {
                const bedge = menuRef.querySelector('.bedge');
                if (index === selectIdx) {
                    gsap.fromTo(
                        bedge,
                        {
                            opacity: 0,
                            scale: 1,
                            y: 20,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            delay: 0.4,
                            duration: 0.6,
                            ease: 'power4.out',
                        },
                    );
                } else {
                    gsap.to(bedge, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.18,
                    });
                }
            }
        });
    }, [selectIdx]);

    // 메뉴 클릭
    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newIdx = Number(e.currentTarget.value);
        if (newIdx !== selectIdx) {
            setSelectIdx(newIdx);
        }
        const spans = (e.currentTarget as HTMLButtonElement).querySelectorAll('span');
        gsap.to(spans, {
            fontSize: '1em',
            duration: 0.6,
            stagger: 0.02,
            ease: 'power4.inOut',
        });
    };

    // 상세 클릭
    const handleDetailClick = () => {
        // navigate('experience');
        console.log('Detail page is opening...');
    };

    return (
        <div className="menu" css={Style}>
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={item.idx}
                        className={`${item.name.toLocaleLowerCase()} ${selectIdx === item.idx ? 'isSelect' : ''}`}
                        ref={el => {
                            menuRefs.current[index] = el;
                        }}
                    >
                        <button
                            value={item.idx}
                            type="button"
                            className="selector"
                            onMouseEnter={() => setOverIdx(item.idx)}
                            onMouseLeave={() => setOverIdx(null)}
                            onClick={handleMenuClick}
                        >
                            {Array.from(item.name).map((char, charIndex) => (
                                <span key={`${item.idx}_${item.name}_${char}_${charIndex}`}>
                                    {char}
                                </span>
                            ))}
                        </button>
                        <span className="bedge">{item.value}</span>
                        {index === 0 && (
                            <div className="detail">
                                <button type="button" onClick={handleDetailClick}>
                                    <span>Detail</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                    >
                                        <path
                                            d="M15 0L12.3563 2.64375L22.8188 13.125H0V16.875H22.8188L12.3563 27.3563L15 30L30 15L15 0Z"
                                            fill="#292376"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Menu };
