import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${ ({ color = "black" }) => color };;
  text-align: ${ ({ textAlign }) => textAlign };
  font-weight: ${ ({ fontWeight = "400" }) => fontWeight };
  margin: ${ ({ margin = "0" }) => margin };
  font-size: ${ ({ fontSize }) => fontSize };
`;