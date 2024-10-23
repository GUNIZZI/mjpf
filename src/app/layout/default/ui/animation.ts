import gsap from 'gsap';
import { NavigateFunction } from 'react-router-dom';

export const animatePageIn = () => {
    const transitionElement = document.getElementById('transition-element');

    if (transitionElement) {
        gsap.fromTo(
            transitionElement,
            {
                y: '5rem',
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.inOut',
            },
        );
    }
};

export const animatePageOut = (href: string, navigate: NavigateFunction) => {
    const transitionElement = document.getElementById('transition-element');

    if (transitionElement) {
        gsap.to(transitionElement, {
            y: '-5rem',
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
                navigate(href);
            },
        });
    }
};
