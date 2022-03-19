import styled from "styled-components";

const FakeGraphWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  width: 100%;
  padding: 2em 2em 2em 1em;

`;
const FakeBar = styled.div`
  width: 0;
  height: 40px;
  margin: 4px 20px;
`;

const FakeWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  align-items: center;
`;

const FakeParagraph = styled.p`
  max-width: 100%;
  height: calc(1rem * 1 * 2);
  overflow: hidden;
  word-break: break-all;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const FakeGraph = () => {
    return (
        <FakeGraphWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/contact</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/how-to-install-trail-on-the-website</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/blog</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/demo-app</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/why-do-you-need-to-know-the-customers</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/customers-reviews</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/case-studies-how-trail-boosted-sales</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/3-ways-to-expose-most-important-contents</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
            <FakeWrapper>
                <FakeParagraph>www.trail.com/how-to-improve-the-best-pages-and-get-more-customers</FakeParagraph>
                <FakeBar/>
            </FakeWrapper>
        </FakeGraphWrapper>
    
    );
};