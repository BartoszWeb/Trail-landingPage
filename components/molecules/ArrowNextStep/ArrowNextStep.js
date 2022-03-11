import styled from "styled-components";
import { ArrowDown } from "../../atoms/ArrowDown/ArrowDown";
import { Paragraph } from "../../atoms/paragraph/paragraph";

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
            <Paragraph margin={"0 0 0 0.3em"}>then</Paragraph>
        </Wrapper>
    </>
    
};