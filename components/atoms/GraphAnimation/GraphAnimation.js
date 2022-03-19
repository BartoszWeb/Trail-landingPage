import styled, { keyframes } from "styled-components";

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em 2em 2em 1em;

`;
const Bar = styled.div`
  width: 0;
  height: 40px;
  margin: 4px 20px;
  background-color: #004264;
  position: relative;
  display: inline-block;
  animation-name: ${ props => transform(props.width) };
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  :before {
    content: "";
    height: 40px;
    width: 20px;
    background-color: #79c6e8;
    position: absolute;
    left: 100%;
    top: -10px;
    transform: skew(0, -45deg);
  }

  :after {
    content: "";
    width: 100%;
    height: 20px;
    background-color: #00a2d2;
    position: absolute;
    top: -20px;
    left: 10px;
    transform: skew(-45deg);
  }

`;
const transform = (width) => keyframes`
  0% {
    width: 0
  }

  100% {
    width: ${ width };
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
`;

const Paragraph = styled.p`
  max-width: 100%;
  font-size: 0.8rem;
  height: calc(0.8rem * 1 * 2);
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const GraphAnimation = () => {
    return (
        <GraphWrapper>
            <Wrapper>
                <Paragraph>www.trail.com/contact</Paragraph>
                <Bar width={ "10%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/how-to-install-trail-on-the-website</Paragraph>
                <Bar width={ "20%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/blog</Paragraph>
                <Bar width={ "30%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/demo-app</Paragraph>
                <Bar width={ "40%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/why-do-you-need-to-know-the-customers</Paragraph>
                <Bar width={ "50%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/customers-reviews</Paragraph>
                <Bar width={ "60%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/case-studies-how-trail-boosted-sales</Paragraph>
                <Bar width={ "70%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/3-ways-to-expose-most-important-contents</Paragraph>
                <Bar width={ "80%" }/>
            </Wrapper>
            <Wrapper>
                <Paragraph>www.trail.com/how-to-improve-the-best-pages-and-get-more-customers</Paragraph>
                <Bar width={ "90%" }/>
            </Wrapper>
        </GraphWrapper>
    
    );
};