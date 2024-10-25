import { ReactNode, useEffect, useRef } from 'react';

import gsap from 'gsap';

import { usePageContext } from '@/app/provider/usePageContext';

import { Style } from './Content.css';

interface OwnProps {
    children: ReactNode;
}

const Content = ({ children }: OwnProps) => {
    const { targetUrl, onAnimationComplete } = usePageContext();
    const wrapRef = useRef(null);

    // In Animation
    useEffect(() => {
        if (wrapRef.current) {
            const title = (wrapRef.current as HTMLElement).querySelector('h2');
            gsap.fromTo(
                title,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                },
            );
        }
    }, []);

    // Out Animation
    useEffect(() => {
        if (targetUrl && wrapRef.current) {
            const title = (wrapRef.current as HTMLElement).querySelector('h2');
            gsap.to(title, {
                y: -100,
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
        <div ref={wrapRef} css={Style}>
            {children}
        </div>
    );
};

export { Content };
