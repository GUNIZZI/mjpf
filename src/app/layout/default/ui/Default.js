import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
// import { useLocation, useOutlet } from 'react-router-dom';
import { NavLink, useNavigate, useOutlet } from 'react-router-dom';
import { animatePageOut } from './animation';
import { Style } from './Default.css';
const Default = () => {
    // const location = useLocation();
    const currentOutlet = useOutlet();
    const navigate = useNavigate();
    // useScrollRestoration(700);
    const handleClick = (href) => (e) => {
        e.preventDefault();
        // useNavigate().push('/about');
        animatePageOut(href, navigate);
    };
    return (_jsxs("div", { css: Style, className: "isMaxWid", children: [_jsx("header", { children: _jsxs("div", { className: "wrap", children: [_jsx("h1", { children: "MJ.Careers" }), _jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { to: "/about", onClick: handleClick('/about'), children: "About me" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/pf", onClick: handleClick('/pf'), children: "Portfolio" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/contact", onClick: handleClick('/contact'), children: "Contact" }) })] }) })] }) }), _jsx("main", { children: currentOutlet })] }));
};
export { Default };
