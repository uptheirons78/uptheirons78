import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import SEO from "../components/seo";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Layout from "../components/layout";
const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  const fade = useSpring({
    config: config.slow,
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 10 },
  });

  const display = useSpring({
    config: { duration: 3000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="Mauro Bono - Tags" />
      <animated.div style={fade}>
        <PageTitle pageTitle="All Tags" />
      </animated.div>
      <StyledSection>
        <animated.div style={display}>
          <StyledUl>
            {allTags.map(tag => (
              <StyledLi key={tag.fieldValue}>
                <StyledLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </StyledLink>
              </StyledLi>
            ))}
          </StyledUl>
        </animated.div>
      </StyledSection>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

/**
 * Component/Page Styles
 */
const StyledSection = styled.section`
  width: 960px;
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
  display: block;
`;

const StyledLink = styled(props => <Link {...props} />)`
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
