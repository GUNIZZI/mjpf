declare const AppRoutes: {
    path: string;
    element: import("@emotion/react/jsx-runtime").JSX.Element;
    children: ({
        index: boolean;
        element: import("@emotion/react/jsx-runtime").JSX.Element;
        path?: undefined;
    } | {
        path: string;
        element: import("@emotion/react/jsx-runtime").JSX.Element;
        index?: undefined;
    })[];
}[];
export { AppRoutes };
