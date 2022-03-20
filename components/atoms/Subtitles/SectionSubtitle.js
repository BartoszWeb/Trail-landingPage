import styled from "styled-components";

export const SectionSubtitle = styled.h2`
  font-weight: ${ ({ theme = "regular" }) => theme.font.regular };
  margin: 0 1.5em 1em 1.5em;
  font-size: 1.3rem;
  text-align: ${ ({ textAlign = "left" }) => textAlign };
  position: relative;
  z-index: 0;

  ::after {
    content: '';
    position: absolute;
    ${ ({ textAlign }) => textAlign ? 'right' : 'left' }: -30px;
    top: -35px;
    width: 70px;
    height: 110px;
    border-radius: 2px;
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    z-index: -1;
  }
`