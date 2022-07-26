import styled from "styled-components";

export const Element = styled.a`
    /* min-height: 22px; */
    /* min-width: 80px; */
    height: 56px;
    line-height: 56px;
    color: black;
    min-height: 40px;
    font-size: 14px;
    padding: 0 72px;
    place-content: center;
    backface-visibility: hidden;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 13px;
    /* line-height: 0; */
    min-height: 34px;
    -webkit-box-pack: center;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.35s ease 0s;
    white-space: nowrap;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 1px 1px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(32, 109, 197);
    color: rgb(32, 109, 197);

    &:hover:not(:disabled) {
        background: rgb(32, 109, 197);
        border-color: rgb(32, 109, 197);
        color: rgb(255, 255, 255);
    }

    &.danger {
        border-color: #EF5350;
        color: #E53935;

        &:hover {
            background: #E53935;
            border-color: #E53935;
            color: rgb(255, 255, 255);
        }
    }

    &.block {
        min-width: 100%;
    }
`;