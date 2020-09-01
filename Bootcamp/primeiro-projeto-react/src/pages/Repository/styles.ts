import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepoInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d3d;
            }

            p {
                font-size: 18px;
                color: #737380;

                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 90px;
            }
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.section`
    margin-top: 80px;

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
