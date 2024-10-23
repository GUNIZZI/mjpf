import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { useEffect } from 'react';
import { animatePageIn } from './animation';
const Template = ({ children }) => {
    useEffect(() => {
        console.log('Template useEffect');
        animatePageIn();
    }, []);
    return _jsx("div", { id: "transition-element", children: children });
};
export { Template };
