import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const fade = useSpring({
    config: config.slow,
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  const display = useSpring({
    config: { duration: 2500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <animated.div style={fade}>
        <PageTitle pageTitle={tagHeader} />
      </animated.div>
      <StyledSection>
        <animated.div style={display}>
          <StyledUl>
            {edges.map(({ node }) => {
              const { title, date, path } = node.frontmatter;
              return (
                <StyledLi key={path}>
                  <StyledLink to={path}>
                    {title} ({date})
                  </StyledLink>
                </StyledLi>
              );
            })}
          </StyledUl>
          <StyledTagLink to="/tags">All tags</StyledTagLink>
        </animated.div>
      </StyledSection>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

/**
 * Component/Page Styles
 */
const StyledSection = styled.section`
  width: 100%;
  padding: 1rem 3rem;
  margin-left: 0;
  margin-right: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 3rem;
`;

const StyledLi = styled.li`
  margin: 1.6rem 0;
`;

const StyledLink = styled(props => <Link {...props} />)`
  &,
  &:active,
  &:visited {
    color: #606060;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    text-decoration: none;
    padding: 2px 6px 0 0;
    box-shadow: 0px 0px 0px 0px #03afc2 inset;
    border-bottom: 3px solid #03afc2;
    transition: all 350ms ease-in-out;
  }
  &:hover {
    box-shadow: 0px -30px 0px 0px #03afc2 inset;
    color: #fff;
  }
  &:active,
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

const StyledTagLink = styled(props => <Link {...props} />)`
  &,
  &:active,
  &:visited {
    font-size: 1.6rem;
    text-decoration: none;
    padding: 0 6px;
    box-shadow: 0px -30px 0px 0px #03afc2 inset;
    color: #fff;
    transition: all 350ms ease-in-out;
  }

  &:hover {
    box-shadow: 0px -2px 0px 0px #03afc2 inset;
    color: #5a5a5a;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
