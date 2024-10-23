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
        element: <AppLayoutDefault />,
        children: [
            {
                index: true,
                element: <Navigate to="about" />,
            },
            {
                path: 'about',
                element: <PageAbout />,
            },
            {
                path: 'pf',
                element: <PagePortfolio />,
            },
            {
                path: 'contact',
                element: <PageContact />,
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
