import { useRef, useEffect } from 'react';

import gsap from 'gsap';

import { LayoutContent } from '@/app/layout';
import { usePageContext } from '@/app/provider/usePageContext';
import { FeaturePfList } from '@/feature/pf';

const Portfolio = () => {
    const { targetUrl, onAnimationComplete } = usePageContext();
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
        }
    }, []);

    // Out Animation
    useEffect(() => {
        if (targetUrl && wrapRef.current) {
            gsap.to(wrapRef.current, {
                opacity: 0,
                duration: 1.2,
                ease: 'power2.in',
                onComplete: () => {
                    onAnimationComplete();
                },
            });
        }
    }, [targetUrl]);

    return (
        <LayoutContent>
            <>
                <h2>
                    <strong>Portfolio</strong>
                </h2>
                <div ref={wrapRef}>
                    <FeaturePfList />
                </div>
            </>
        </LayoutContent>
    );
};

export { Portfolio };
