import { Global, css } from '@emotion/react';

import { resetStyles } from './reset';
import { COLORS } from '../config/colors';

// @font-face {
//     font-family: 'Montserrat';
//     src: url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2')
//         format('woff2');
//     font-style: normal;
//     font-weight: 400;
//     font-display: swap;
// }

// @font-face {
//     font-family: 'Noto Sans KR';
//     src: url('https://fonts.gstatic.com/s/notosanskr/v13/PbykFmXiEBPT4ITbgNA5Cgm203Tq4JJWq209pU0DPdWuqxJFA4GNDCBYtw.0.woff2')
//         format('woff2');
//     font-style: normal;
//     font-weight: 400;
//     font-display: swap;
// }

const globalStyles = css`
    ${resetStyles}

    :root {
        ${Object.entries(COLORS)
            .map(([key, value]) => `--color-${key}: ${value};`)
            .join('\n')}
    }

    body {
        min-width: 1380px;
    }
    body,
    * {
        font-family: 'Montserrat', 'Noto Sans KR', 'Roboto', sans-serif;
        color: ${COLORS.textNormal};
    }

    .isMaxWid {
        max-width: 1890px;
        margin-left: auto !important;
        margin-right: auto !important;
    }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export { GlobalStyles };
