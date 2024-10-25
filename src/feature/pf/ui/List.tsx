import { useRef, useEffect } from 'react';

import gsap from 'gsap';

import { usePageContext } from '@/app/provider/usePageContext';

import { Style } from './List.css';

const List = () => {
    const { targetUrl } = usePageContext();
    const wrapRef = useRef(null);

    // In Animation
    useEffect(() => {
        if (wrapRef.current) {
            //     const bg = (wrapRef.current as HTMLElement).querySelector('.bg');
            gsap.fromTo(
                wrapRef.current,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                },
            );

            const items = (wrapRef.current as HTMLElement).querySelectorAll('.item');
            gsap.fromTo(
                items,
                {
                    height: 500,
                    y: 40,
                    opacity: 0,
                },
                {
                    height: () => {
                        return Math.round(Math.random() * 150) + 180;
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: (_idx, el) => {
                        return el.getAttribute('data-seq') * 0.15;
                    },
                    ease: 'circ.out',
                },
            );
        }
    }, []);

    // Out Animation
    useEffect(() => {
        if (targetUrl && wrapRef.current) {
            gsap.to(wrapRef.current, {
                opacity: 0,
                duration: 1.2,
                ease: 'power2.in',
            });

            const items = (wrapRef.current as HTMLElement).querySelectorAll('.item');
            gsap.to(items, {
                y: -30,
                opacity: 0,
                duration: 0.5,
                delay: (_idx, el) => {
                    return el.getAttribute('data-seq') * 0.04;
                },
                ease: 'power2.in',
            });
        }
    }, [targetUrl]);

    const listDatas = Array.from({ length: 16 }, (_, idx) => ({
        seq: idx + 1,
        name: 'asdasdasd',
    }));
    const distributedLists = listDatas.reduce(
        (acc, item, index) => {
            const arrayIndex = index % 4;
            if (!acc[arrayIndex]) {
                acc[arrayIndex] = [];
            }
            acc[arrayIndex].push(item);
            return acc;
        },
        [] as Array<typeof listDatas>,
    );

    console.log('distributedLists', distributedLists);

    return (
        <div ref={wrapRef} css={Style}>
            {distributedLists.map((list, rowIdx) => (
                <div className="col" key={rowIdx}>
                    {list.map(item => (
                        <div className="item" key={`${item.seq}`} data-seq={item.seq} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export { List };
