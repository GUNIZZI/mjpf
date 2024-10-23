import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
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
    const bedgeRefs = useRef([]);
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
            }
            else {
                gsap.to(bedge, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.18,
                });
            }
        });
    }, [selectIdx]);
    return (_jsx(Template, { children: _jsx("div", { className: "isMaxWid", css: Style, children: _jsx("div", { className: "wrap", children: _jsx("div", { className: "selectors", children: _jsx("ul", { children: menuItems.map((item, index) => (_jsxs("li", { className: `${item.name} ${selectIdx === item.idx ? 'isSelect' : ''}`, children: [_jsx("button", { type: "button", className: "selector", onClick: () => setSelectIdx(item.idx), children: item.name }), _jsx("span", { className: "bedge", ref: el => {
                                        bedgeRefs.current[index] = el;
                                    }, children: item.value }), index === 0 && (_jsx("div", { className: "detail", children: _jsxs("button", { type: "button", children: [_jsx("span", { children: "Detail" }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", children: _jsx("path", { d: "M15 0L12.3563 2.64375L22.8188 13.125H0V16.875H22.8188L12.3563 27.3563L15 30L30 15L15 0Z", fill: "#292376" }) })] }) }))] }, item.idx))) }) }) }) }) }));
};
export { About };
