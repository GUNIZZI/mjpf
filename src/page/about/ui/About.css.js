import { css } from '@emotion/react';
const Style = () => css `
    padding: 10px 1.25rem 0;

    .wrap {
        height: 907px;
        padding: 30px;
        border-radius: 1rem;
        background: linear-gradient(
            116.85deg,
            rgba(255, 255, 255, 0.95) 10.93%,
            #fffafe 60.61%,
            rgba(240, 239, 255, 0.9) 82.32%,
            #edf3ff 100%
        );
    }

    .selectors {
        > ul {
            display: flex;
            flex-direction: column;
            gap: 60px;

            > li {
                display: flex;
                align-items: flex-end;
                position: relative;

                > .selector {
                    border: none;
                    font-size: 8.125em;
                    font-weight: 700;
                    line-height: 1;
                    cursor: pointer;
                    background: linear-gradient(
                        110.87deg,
                        #7ba0ff 20.51%,
                        #9572ff 53.11%,
                        #b8a6ee 80.33%
                    );
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    opacity: 0.2;
                    transition: all 0.6s ease-in-out;

                    &.experience {
                    }
                    &.skill {
                    }
                    &.education {
                    }
                }
                > .bedge {
                    position: absolute;
                    top: -0rem;
                    left: 1rem;
                    transform: translateX(-50%) scale(0.5);
                    padding: 5px 12px;
                    border-radius: 8px;
                    background: #292376;
                    color: #ffffff;
                    font-size: 1.875rem;
                    line-height: 1;
                    opacity: 0;
                }
                > .detail {
                    transform: translateY(-1em);
                    margin-left: -5em;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;

                    button {
                        border: 1px solid #292376;
                        border-radius: 10em;
                        padding: 0.3em 0.75em;
                        background: none;
                        font-size: 3.125em;
                        font-weight: 700;
                        line-height: 1;
                        cursor: pointer;
                        transition: all 0.3s ease-in-out;

                        span {
                            color: #292376;
                            transition: all 0.5s ease-in-out;
                        }

                        &:hover {
                            padding: 0.3em 1em;
                            margin-left: 0.5em;
                            transition-delay: 0 !important;

                            span {
                                margin-right: 0.2em;
                            }
                        }
                    }

                    svg {
                        transform: translateY(-3px);
                        margin-left: -30px;
                        transition: margin 1s 0.4s ease-in-out;
                    }
                }

                &:hover {
                }

                &.isSelect {
                    .selector {
                        opacity: 1;
                    }

                    .detail {
                        transition-delay: 0.5s;
                        transition-duration: 0.6s;
                        margin-left: -3em;
                        opacity: 1;

                        svg {
                            margin-left: 8px;
                        }
                    }
                }
            }
        }
    }
`;
export { Style };
