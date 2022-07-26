import styled, { css } from "styled-components";

export const Container = styled.div`
  /* padding: 0 2rem; */
  padding: 1rem;
`

export const Main = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const textCommon = css`
    text-align: center;
    margin: 0.35rem;
`;

export const Title = styled.h1`
  ${textCommon}
`;

export const Subtitle = styled.h2`
  ${textCommon}
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
`;