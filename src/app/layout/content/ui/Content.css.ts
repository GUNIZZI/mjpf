import { css } from '@emotion/react';

const Style = () => css`
    h2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;

        > * {
            background: linear-gradient(110.87deg, #b4c9ff 20.51%, #c9b7ff 53.11%, #ede7ff 80.33%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            font-size: 8.125rem;
            font-weight: 700;
            opacity: 0.3;
        }
    }
`;

export { Style };
