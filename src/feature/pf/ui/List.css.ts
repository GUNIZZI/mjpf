import { css } from '@emotion/react';

const Style = () => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 11rem 1.25rem 4rem;

    .col {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .item {
        // min-height: 300px;
        border: 1px solid #ede7ff;
        border-radius: 1em;
        background: #fbfaff;
        box-shadow: 0px 5px 10px 0px #0000000d;
    }
`;

export { Style };
