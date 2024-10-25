// import { useLocation, useOutlet } from 'react-router-dom';

import { useCallback, useMemo, useState } from 'react';

import { NavLink, useNavigate, useOutlet } from 'react-router-dom';

import { PageContext } from '@/shared/context/page';

import { Style } from './Default.css';

const Default = () => {
    // const location = useLocation();
    const navigate = useNavigate();
    const currentOutlet = useOutlet();
    const [targetUrl, setTargetUrl] = useState<string | null>(null);

    // useScrollRestoration(700);

    const handlePageChange = (href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setTargetUrl(href);
    };

    const onAnimationComplete = useCallback(() => {
        if (targetUrl) {
            navigate(targetUrl);
            setTargetUrl(null);
        }
    }, [targetUrl, navigate]);

    const contextValue = useMemo(
        () => ({
            targetUrl,
            onAnimationComplete,
        }),
        [targetUrl, onAnimationComplete],
    );

    return (
        <PageContext.Provider value={contextValue}>
            <div css={Style} className="isMaxWid">
                <header>
                    <div className="wrap">
                        {/* 로고 */}
                        <h1>MJ.Careers</h1>

                        {/* 메뉴 */}
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/about" onClick={handlePageChange('/about')}>
                                        About me
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pf" onClick={handlePageChange('/pf')}>
                                        Portfolio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" onClick={handlePageChange('/contact')}>
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
        </PageContext.Provider>
    );
};

export { Default };
