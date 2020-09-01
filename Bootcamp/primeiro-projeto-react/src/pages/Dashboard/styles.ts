import styled, { css } from 'styled-components';

import { shade } from 'polished';

// Template literals ``

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    line-height: 56px;
    font-weight: bold;
    margin-top: 80px;
    max-width: 450px;
`;

export const Form = styled.form<FormProps>`
    max-width: 714px;
    margin-top: 40px;
    height: 72px;

    display: flex;

    input {
        flex: 1;
        background: '#fff';
        border: 0;
        padding: 0 29px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid ${props => (props.hasError ? '#c53030' : '#fff')};
        border-right: 0px;

        /*
            Modo feito pelo Diego

            ${props =>
            props.hasError &&
            css`
                border-color: '#c53030';
            `}
        */

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    justify-content: center;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 14px;

        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            border-radius: 50%;
            height: 83px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                color: #3d3d4d;
                line-height: 28px;
                font-size: 20px;
            }

            p {
                color: #a8a8b3;
                line-height: 21px;
                font-size: 18px;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #c9c9d4;
        }
    }
`;

export const Error = styled.span`
    display: block;
    margin-top: 8px;
    color: #c53030;
`;
