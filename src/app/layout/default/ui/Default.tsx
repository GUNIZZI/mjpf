// import { useLocation, useOutlet } from 'react-router-dom';

import { NavLink, useNavigate, useOutlet } from 'react-router-dom';

import { animatePageOut } from './animation';
import { Style } from './Default.css';

const Default = () => {
    // const location = useLocation();
    const currentOutlet = useOutlet();
    const navigate = useNavigate();

    // useScrollRestoration(700);

    const handleClick = (href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        // useNavigate().push('/about');
        animatePageOut(href, navigate);
    };

    return (
        <div css={Style} className="isMaxWid">
            <header>
                <div className="wrap">
                    {/* 로고 */}
                    <h1>MJ.Careers</h1>

                    {/* 메뉴 */}
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/about" onClick={handleClick('/about')}>
                                    About me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pf" onClick={handleClick('/pf')}>
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={handleClick('/contact')}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>{currentOutlet}</main>
            {/* <MainLoaderProvider> */}
            {/* <ScrollRestoration /> */}
            {/* <WidgetBg />
                <WidgetHeaderUser />
                <WidgetLnb />
                <AnimatePresence mode="wait">
                    <TransitionFade
                        key={location.pathname}
                        className="transitionWrap"
                        duration={0.4}
                    >
                        <SuspensePage>{currentOutlet}</SuspensePage>
                    </TransitionFade>
                </AnimatePresence> */}
            {/* </MainLoaderProvider> */}
        </div>
    );
};

export { Default };
