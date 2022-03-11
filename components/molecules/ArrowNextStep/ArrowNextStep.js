import styled from "styled-components";
import { ArrowDown } from "../../atoms/ArrowDown/ArrowDown";
import { ParagraphHtml } from "../../atoms/Paragraph/ParagraphHtml";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3em 0;
`
export const ArrowNextStep = () => {
    return <>
        <Wrapper>
            <ArrowDown/>
            <ParagraphHtml margin={"0 0 0 0.3em"}>then</ParagraphHtml>
        </Wrapper>
    </>
    
};