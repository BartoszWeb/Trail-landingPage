import styled from "styled-components";
import { ParagraphHtml } from "../../atoms/Paragraph/ParagraphHtml";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: ${ ({ fontWeight }) => fontWeight };
  background-color: ${ ({ theme }) => theme.colors.tertiaryColor };
  margin: 0.2em 0;
  padding: 3.5em;
  border-radius: 5px;
  position: relative;
  @media (max-width: 500px) {
    padding: 2.5em;
  }
`;
export const StyledTitle = styled(ParagraphHtml)`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  margin: 0 0 0.5em 0;
`;

export const StyledPost = styled(ParagraphHtml)`
  text-align: left;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 60px;
  top: -10px;
  left: 20px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1.5em;
`;