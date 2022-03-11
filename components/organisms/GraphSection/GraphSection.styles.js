import styled from "styled-components";

export const GraphSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 6em auto 3em auto;
`;
export const GridTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5em;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    margin-top: 3.5em;
  }
`;

export const LeftColumn = styled.div`
  position: relative;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  padding: 0 6em;
  position: relative;
  overflow: hidden;

  @media (max-width: 1000px) {
    margin-top: 3em;
    padding: 0 3em;

  }

  @media (max-width: 500px) {
    padding: 0 3em;
  }
`;

export const StyledTrailSteps = styled.div`
  position: absolute;
  width: 300px;
  z-index: -1;
  left: -10%;

  @media (max-width: 1000px) {
    left: 70%;
    width: 200px;
  }
`;
export const FakeGraph = styled.div`
  width: 100%;
  height: 574px;
  @media (max-width: 700px) {
    height: 400px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  position: relative;
  width: 100%;
  margin: ${ ({ margin }) => margin };
  padding: ${ ({ padding }) => padding };


  @media (max-width: 300px) {
    padding: 10px;
    width: 90%;
    margin: 0 auto;
  }

  ::before {
    content: '';
    background-color: ${ ({ theme }) => theme.colors.secondaryColor };
    display: block;
    position: absolute;
    top: -33px;
    left: 10px;
    width: 100px;
    height: 60px;
  }


  @media (max-width: 1000px) {
    padding: 1em;
    width: 90%;
    margin: 0 auto;
  }
`;