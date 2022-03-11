import { AvatarImg } from "../../atoms/Avatar/AvatarImg";
import { Time } from "../../atoms/Time/Time";
import { Wrapper, StyledTitle, StyledPost, AvatarWrapper, AuthorInfo } from "./BlogPost.styles";

const path = "assets/avatarBDBackgroundGray.png";

export const BlogPost = ({ time, title, post }) => {
    return (
        <Wrapper>
            <AuthorInfo>
                <AvatarWrapper>
                    <AvatarImg path={ path }/>
                </AvatarWrapper>
                <Time time={ time }/>
            </AuthorInfo>
            <StyledTitle>{ title }</StyledTitle>
            <StyledPost>{ post }</StyledPost>
        </Wrapper>
    );
};

// BlogPost.propTypes = {
//     time: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     post: PropTypes.string.isRequired
// };