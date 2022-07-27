import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  width: 1060px;
    padding: 0 20px;
`

export const Article = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
      'article sidebar';
  gap: 0 20px;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  width: 340px;
`

export const Main = styled.div`
  /* min-height: 100vh; */
  /* padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`