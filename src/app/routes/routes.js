import { jsx as _jsx } from "@emotion/react/jsx-runtime";
// import { Error } from '@/page/error';
// import ProtectedGuard from '../guard/ProtectedGuard';
import { Navigate } from 'react-router-dom';
import { PageAbout } from '@/page/about';
import { PageContact } from '@/page/contact';
import { PagePortfolio } from '@/page/portfolio';
import { AppLayoutDefault } from '../layout';
// import { BOARD_QUERY_KEY } from '@/shared/config/constants';
const AppRoutes = [
    {
        path: '/',
        element: _jsx(AppLayoutDefault, {}),
        children: [
            {
                index: true,
                element: _jsx(Navigate, { to: "about" }),
            },
            {
                path: 'about',
                element: _jsx(PageAbout, {}),
            },
            {
                path: 'pf',
                element: _jsx(PagePortfolio, {}),
            },
            {
                path: 'contact',
                element: _jsx(PageContact, {}),
            },
            // {
            //     path: 'blog',
            //     element: <LayoutBoard />,
            //     children: [
            //         {
            //             index: true,
            //             element: <PageBoardList boardType={BOARD_QUERY_KEY.LIFE} />,
            //         },
            //         {
            //             path: ':seq',
            //             element: <PageBoardView boardType={BOARD_QUERY_KEY.LIFE} />,
            //         },
            //         {
            //             element: <ProtectedGuard />,
            //             children: [
            //                 {
            //                     path: 'write',
            //                     element: <PageBoardWrite boardType={BOARD_QUERY_KEY.LIFE} />,
            //                 },
            //             ],
            //         },
            //     ],
            // },
            // {
            //     path: 'tech',
            //     element: <LayoutBoard />,
            //     children: [
            //         {
            //             index: true,
            //             element: <PageBoardList boardType={BOARD_QUERY_KEY.TECH} />,
            //         },
            //         {
            //             path: ':seq',
            //             element: <PageBoardView boardType={BOARD_QUERY_KEY.TECH} />,
            //         },
            //         {
            //             element: <ProtectedGuard />,
            //             children: [
            //                 {
            //                     path: 'write',
            //                     element: <PageBoardWrite boardType={BOARD_QUERY_KEY.TECH} />,
            //                 },
            //             ],
            //         },
            //     ],
            // },
            // {
            //     path: 'pf',
            //     element: <LayoutBoard />,
            //     children: [
            //         {
            //             index: true,
            //             element: <PageBoardList boardType={BOARD_QUERY_KEY.PF} />,
            //         },
            //         {
            //             path: ':seq',
            //             element: <PageBoardView boardType={BOARD_QUERY_KEY.PF} />,
            //         },
            //         {
            //             element: <ProtectedGuard />,
            //             children: [
            //                 {
            //                     path: 'write',
            //                     element: <PageBoardWrite boardType={BOARD_QUERY_KEY.PF} />,
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ],
    },
    // {
    //     path: '/error/:errorStatus',
    //     element: <Error />,
    // },
];
export { AppRoutes };
