import { useContext } from 'react';

import { PageContext } from '@/shared/context/page';

// Custom hook 생성
const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageProvider');
    }
    return context;
};

export { usePageContext };
