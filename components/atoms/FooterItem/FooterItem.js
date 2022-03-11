import styled from "styled-components";

const ListItem = styled.li`
  margin: 5px 0;
  list-style: none;
`;
const LinkFooter = styled.a`
  color: white;
  font-size: ${ ({ fontSize }) => fontSize };
  padding: ${ ({ padding = "5px" }) => padding };
  @media (max-width: 700px) {
    font-size: ${ ({ mediaFontSize }) => mediaFontSize };
  }
`;
export const FooterItem = ({ href, title, fontSize, padding, mediaFontSize }) => {
    return (
        <ListItem>
            <LinkFooter mediaFontSize={ mediaFontSize } padding={ padding } fontSize={ fontSize }
                        href={ href }>{ title } </LinkFooter>
        </ListItem>
    );
    
};
//
// FooterItem.propTypes = {
//     href: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     fontSize: PropTypes.string,
//     padding: PropTypes.string,
//     mediaFontSize: PropTypes.string
// };