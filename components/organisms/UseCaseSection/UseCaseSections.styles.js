import styled from "styled-components";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";

export const UseCaseSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 7em auto 3em auto;
  display: grid;
  
  @media (max-width: 600px) {
    margin: 3.5em auto 3em auto;
    padding-top: 25px;
  }
  @media (max-width: 500px) {
    overflow-x: hidden;
  }
`;

export const StyledButton = styled(ButtonSignUp)`
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 800px) {
    margin-top: 1em;
  }
  
`;
export const IframeSvgFake = styled.img`
  background: url(${ "/assets/laptop-canvas.svg" }) center center no-repeat;
  box-sizing: border-box;
  background-size: contain;
  padding: 13.2% 17.6% 14.4% 16.6%;
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