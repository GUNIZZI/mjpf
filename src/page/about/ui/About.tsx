import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { Template } from '@/app/layout/default/ui/Template';

import { Style } from './About.css';

const menuItems = [
    { idx: 0, name: 'Experience', value: 5 },
    { idx: 1, name: 'Skill', value: 3 },
    { idx: 2, name: 'Education', value: 4 },
];

const About = () => {
    const bedgeRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const [selectIdx, setSelectIdx] = useState(0);

    useEffect(() => {
        bedgeRefs.current.forEach((bedge, index) => {
            if (index === selectIdx) {
                gsap.to(bedge, {
                    opacity: 1,
                    scale: 1,
                    delay: 0.4,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.3)',
                });
            } else {
                gsap.to(bedge, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.18,
                });
            }
        });
    }, [selectIdx]);

    return (
        <Template>
            <div className="isMaxWid" css={Style}>
                {/* <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background:
                        'linear-gradient(116.85deg, rgba(255, 255, 255, 0.95) 10.93%, #FFFAFE 60.61%, rgba(240, 239, 255, 0.9) 82.32%, #EDF3FF 100%',
                }}
            /> */}
                <div className="wrap">
                    <div className="selectors">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.idx}
                                    className={`${item.name} ${selectIdx === item.idx ? 'isSelect' : ''}`}
                                >
                                    <button
                                        type="button"
                                        className="selector"
                                        onClick={() => setSelectIdx(item.idx)}
                                    >
                                        {item.name}
                                    </button>
                                    <span
                                        className="bedge"
                                        ref={el => {
                                            bedgeRefs.current[index] = el;
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                    {index === 0 && (
                                        <div className="detail">
                                            <button type="button">
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
                </div>
            </div>
        </Template>
    );
};

export { About };
