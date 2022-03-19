import styled from "styled-components";

const SkeletonGraphContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em 2em 2em 1em;

`;
const SkeletonBar = styled.div`
  width: 0;
  height: 40px;
  margin: 4px 20px;
`;

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  align-items: center;
`;

const SkeletonParagraph = styled.p`
  max-width: 100%;
  height: calc(1rem * 1 * 2);
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SkeletonGraph = () => {
    return (
        <SkeletonGraphContainer>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/contact</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/how-to-install-trail-on-the-website</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/blog</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/demo-app</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/why-do-you-need-to-know-the-customers</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/customers-reviews</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/case-studies-how-trail-boosted-sales</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/3-ways-to-expose-most-important-contents</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
            <SkeletonWrapper>
                <SkeletonParagraph>www.trail.com/how-to-improve-the-best-pages-and-get-more-customers</SkeletonParagraph>
                <SkeletonBar/>
            </SkeletonWrapper>
        </SkeletonGraphContainer>
    
    );
};