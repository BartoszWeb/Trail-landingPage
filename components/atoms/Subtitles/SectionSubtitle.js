import styled from "styled-components";

export const SectionSubtitle = styled.h2`
  font-weight: ${ ({ theme = "regular" }) => theme.font.regular };
  margin: 0 1.5em 1em 1.5em;
  font-size: 1.3rem;
  text-align: ${ ({ textAlign = "left" }) => textAlign };
  position: relative;
  z-index: 0;
  font-style: italic;

  ::after {
    content: '';
    position: absolute;
    top: -14px;
    ${ ({ textAlign }) => textAlign ? 'right' : 'left' }: -30px;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    z-index: -1;
  }
`