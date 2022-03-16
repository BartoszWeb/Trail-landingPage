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
                        time="19.09.2021"
                        title="How to boost sales with trail?"
                        post="Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,"
                        url="./"
                    />
                    
                    <BlogPost
                        time="19.09.2021"
                        title="How to boost sales with trail?"
                        post="Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,"
                        url="./"
                    />
                    
                    <BlogPost
                        time="19.09.2021"
                        title="Why do you need to know the customer's sales trail?"
                        post="Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,"
                        url="./"
                    />
                    
                    <BlogPost
                        time="19.09.2021"
                        title="How to improve the best pages and get more customers?"
                        post="Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,"
                        url="./"
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