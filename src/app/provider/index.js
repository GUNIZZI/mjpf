import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/app/routes/routes';
import { GlobalStyles } from '@/shared/styles/GlobalStyles';
// const router = createBrowserRouter(AppRoutes, { basename: '/guni' });
const router = createBrowserRouter(AppRoutes);
const queryClient = new QueryClient();
const AppProvider = () => {
    return (_jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(GlobalStyles, {}), _jsx(RouterProvider, { router: router })] }));
};
export { AppProvider };