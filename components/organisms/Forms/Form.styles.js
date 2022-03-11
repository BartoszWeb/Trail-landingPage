import styled from "styled-components";

export const StyledLogo = styled.a`
  width: 150px;

`;
export const FormContainer = styled.form`
  max-width: 600px;
  margin: 9em auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3em 6em;
  box-shadow: 0 0 2em 0 #dadada;
  @media (max-width: 700px) {
    padding: 1em;
    margin: 9em 1em;
  }
`;

export const StyledParagraph = styled.h2`
  margin: 1.5em 0 0.3em 0;
  font-size: 1.3rem;
  font-weight: ${ ({ theme }) => theme.font.thin };
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3em;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  margin: 0.2em 0;
  padding-left: 0.2em;
`;


export const FormButton = styled.button`
  margin: 1em 0;
  background-color: #ffde00;
  padding: 1em 2em;
  border-radius: 0.2em;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ffea58;
  }
`;

export const Error = styled.small`
  margin-top: 0.1em;
  color: red;
`;