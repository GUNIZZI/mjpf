import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { usePageContext } from '@/app/provider/usePageContext';
import { FeatureAboutAnimation, FeatureAboutMenu } from '@/feature/aboutMenu';

import { Style } from './About.css';

const About = () => {
    const [selectIdx, setSelectIdx] = useState<number | null>(null);
    const { targetUrl, onAnimationComplete } = usePageContext();
    const wrapRef = useRef(null);

    // In Animation
    useEffect(() => {
        if (wrapRef.current) {
            const bg = (wrapRef.current as HTMLElement).querySelector('.bg');
            gsap.fromTo(
                bg,
                {
                    scaleX: 1.4,
                    scaleY: 1.2,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 3,
                    ease: 'power2.out',
                    onStart: () => {
                        document.body.style.overflowX = 'hidden !important';
                    },
                    onComplete: () => {
                        document.body.style.overflow = 'auto';
                    },
                },
            );
            setTimeout(() => {
                setSelectIdx(0);
            }, 1200);
        }
    }, []);

    // Out Animation
    useEffect(() => {
        if (targetUrl && wrapRef.current) {
            const bg = (wrapRef.current as HTMLElement).querySelector('.bg');
            gsap.to(bg, {
                scaleX: 1.4,
                scaleY: 1.2,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.in',
                onStart: () => {
                    document.body.style.overflowX = 'hidden !important';
                },
                onComplete: () => {
                    document.body.style.overflow = 'auto';
                    onAnimationComplete();
                },
            });
        }
    }, [targetUrl]);

    return (
        <div className={`isMaxWid ${targetUrl && 'isPageOut'}`} css={Style}>
            <div className="wrap" ref={wrapRef}>
                <span className="bg" />
                <FeatureAboutMenu value={[selectIdx, setSelectIdx]} />
                <FeatureAboutAnimation selectIdx={selectIdx} />
                <span>selectIdx : {selectIdx}</span>
            </div>
        </div>
    );
};

export { About };
