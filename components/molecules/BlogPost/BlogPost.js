import { AvatarImg } from "../../atoms/Avatar/AvatarImg";
import { Time } from "../../atoms/Time/Time";
import { WrapperLink, StyledTitle, StyledPost, AvatarWrapper, AuthorInfo, StyledLink } from "./BlogPost.styles";
import Link from "next/link";

const path = "assets/avatarBDBackgroundGray.png";

export const BlogPost = ({ time, title, post, url }) => {
    return (
        <WrapperLink href="/">
            <AuthorInfo>
                <AvatarWrapper>
                    <AvatarImg path={ path }/>
                </AvatarWrapper>
                <Time time={ time }/>
            </AuthorInfo>
            <StyledTitle>{ title }</StyledTitle>
            <StyledPost>{ post }</StyledPost>
            <Link passHref href={ url }>
                <StyledLink>Read article...</StyledLink>
            </Link>
        </WrapperLink>
    );
};

// BlogPost.propTypes = {
//     time: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     post: PropTypes.string.isRequired
// };