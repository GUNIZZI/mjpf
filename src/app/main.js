import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { AppProvider } from './provider';
import './main.css';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(AppProvider, {}));
