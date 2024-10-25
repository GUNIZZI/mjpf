import { css } from '@emotion/react';

const Style = () => css`
    padding: 10px 1.25rem 0;

    .wrap {
        position: relative;
        min-height: 907px;
        height: 87vh;
        padding: 30px;

        .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            background: linear-gradient(
                116.85deg,
                rgba(255, 255, 255, 0.95) 10.93%,
                #fffafe 60.61%,
                rgba(240, 239, 255, 0.9) 82.32%,
                #edf3ff 100%
            );
        }
    }
`;

export { Style };
