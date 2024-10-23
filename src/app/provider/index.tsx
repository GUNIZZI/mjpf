import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@/app/routes/routes';
import { GlobalStyles } from '@/shared/styles/GlobalStyles';

const router = createBrowserRouter(AppRoutes, { basename: '/mjpf' });
const queryClient = new QueryClient();

const AppProvider = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
    );
};

export { AppProvider };
