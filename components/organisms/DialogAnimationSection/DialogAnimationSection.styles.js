import styled from "styled-components";

export const DialogSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto 1em auto;
`;

export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.3fr;
  margin-top: 5em;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
  }

`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;