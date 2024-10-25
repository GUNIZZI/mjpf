import { createContext } from 'react';

interface PageContextType {
    targetUrl: string | null;
    onAnimationComplete: () => void;
}

const PageContext = createContext<PageContextType | null>(null);

export { PageContext };
