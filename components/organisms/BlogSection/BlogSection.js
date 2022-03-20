import Link from "next/link";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { BlogPost } from "../../molecules/BlogPost/BlogPost";
import { BlogSectionWrapper } from "./BlogSection.styles";
import { GridPosts } from "./BlogSection.styles";
import { ButtonWrapper } from "./BlogSection.styles";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";


export const BlogSection = () => {
    return (
        <>
            <BlogSectionWrapper id="blog">
                <SectionSubtitle>Have a look at our blog posts</SectionSubtitle>
                <GridPosts>
                    <BlogPost
                        time="19.09.2022"
                        title="Case studies how the Trail boosted sales."
                        post="If you know the customers`s trail before buying you can get real benefits. For example, company X noticed that most of the users before buying a product, visited a specific web page on the blog. This information helped raise sales by 2 times, only because of a slight improvement on the website."
                        url="/"
                    />
                    
                    <BlogPost
                        time="19.09.2022"
                        title="How to boost sales with trail?"
                        post="Users which buy your products followed by specific patterns. Very often visit the same pages, click on the same buttons however those who don't buy followed by the other patterns. If you get to know precisely patterns of buying customers, you will be able to transform not-buying customers into buying."
                        url="/"
                    />
                    
                    <BlogPost
                        time="19.09.2022"
                        title="Why do you need to know the customer's sales trail?"
                        post="The knowledge about how exactly thinks your customer, what he is exactly looking for, which information checks before buying is crucial to boost your sales. This knowledge shows you how to develop your business faster, how to improve your products and how to transform new visitors into customers more effectively."
                        url="/"
                    />
                    
                    <BlogPost
                        time="19.09.2022"
                        title="How to improve the best pages and get more customers?"
                        post="There is a lot of methods to highlight the most important content. The simplest one and at the same time the most effective is to move this content to the top of the page. Over 50% of users even don't scroll the page to the bottom if the content on the top is not attractive."
                        url="/"
                    />
                </GridPosts>
                <ButtonWrapper>
                    <Link href="/blog" passHref>
                        <ButtonSignUp href="/">VISIT TRAIL`S BLOG</ButtonSignUp>
                    </Link>
                </ButtonWrapper>
            </BlogSectionWrapper>
        </>
    );
    
};