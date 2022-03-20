import styled from "styled-components";

export const WrapperSVG = styled.div`
  position: relative;
  height: 0;
  padding: 3% 5% 67.5% 5%;
  margin: -4em 0 -3em 0;
  overflow: hidden;
`;

export const IframeSVG = styled.iframe`
  background: url(${ "/assets/laptop-canvas.svg" }) center center no-repeat;
  box-sizing: border-box;
  background-size: contain;
  padding: 13.2% 17.5% 14.4% 16.4%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;

  @media (max-width: 1000px) {
    left: 3%;
  }

  @media (max-width: 800px) {
    padding: 13.9% 17.5% 14.9% 16.4%;
  }

  @media (max-width: 600px) {
    padding: 14.9% 17.5% 15.9% 16.4%;
  }

  @media (max-width: 450px) {
    padding: 15.5% 17.5% 16.9% 16.4%;
  }

  @media (max-width: 370px) {
    margin-top: 1.5em;
    padding: 16.5% 17.5% 17.5% 16.4%;
  }

  @media (max-width: 280px) {
    padding: 16.9% 17.5% 18% 16.4%;
  }
`;