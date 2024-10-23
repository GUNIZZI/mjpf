import { useEffect } from 'react';

import { animatePageIn } from './animation';

const Template = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        console.log('Template useEffect');
        animatePageIn();
    }, []);

    return <div id="transition-element">{children}</div>;
};

export { Template };
