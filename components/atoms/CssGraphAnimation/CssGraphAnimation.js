import styled, { keyframes } from "styled-components";

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em;

`;
const Bar = styled.div`
  width: 0;
  height: 40px;
  margin: 4px 20px;
  background-color: #004264;
  position: relative;
  display: inline-block;
  animation-name: ${ props => transform(props.width) };
  animation-duration: 1.5s;
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
  grid-template-columns: 0.8fr 1fr;
  visibility: visible;
`;

const ParagraphHtml = styled.p`
  visibility: visible;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    font-size: 0.6rem;
  }
`;
export const CssGraphAnimation = () => {
    return (
        <GraphWrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/our-team</ParagraphHtml>
                <Bar width={ "5%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/contact</ParagraphHtml>
                <Bar width={ "10%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>how-to-install-trail-on-the-website</ParagraphHtml>
                <Bar width={ "20%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/blog</ParagraphHtml>
                <Bar width={ "30%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/demo-app</ParagraphHtml>
                <Bar width={ "40%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/why-do-you-need-to-know-the-customers</ParagraphHtml>
                <Bar width={ "50%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/customers-reviews</ParagraphHtml>
                <Bar width={ "60%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/case-studies-how-trail-boosted-sales</ParagraphHtml>
                <Bar width={ "70%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/3-ways-to-expose-most-important-contents</ParagraphHtml>
                <Bar width={ "80%" }/>
            </Wrapper>
            <Wrapper>
                <ParagraphHtml>www.trail.com/how-to-improve-the-best-pages-and-get-more-customers</ParagraphHtml>
                <Bar width={ "90%" }/>
            </Wrapper>
        </GraphWrapper>
    
    );
};