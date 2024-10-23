import { css } from '@emotion/react';
import { COLORS } from '@/shared/config/colors';
const Style = () => css `
    header {
        position: sticky;
        top: 0;
        padding: 1.25rem 1.25rem 0;
        z-index: 1;

        .wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.625rem;
            margin: 0 auto;
            border-radius: 8px;
            background: #ffffff80;

            h1 {
                font-size: 1.875rem;
                font-weight: 700;
                line-height: 1;
            }

            nav {
                font-size: 1.125rem;
                font-weight: 600;

                ul {
                    display: flex;
                    gap: 1.125em;

                    li {
                        a {
                            color: ${COLORS.textPrimary};
                            font-weight: 600;
                            opacity: 0.5;
                            transition: all 0.24s ease-in-out;

                            &:hover {
                                opacity: 0.75;
                            }

                            &.active {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }

    main {
        position: relative;
    }
`;
export { Style };
