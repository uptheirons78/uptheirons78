import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

const postTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={[...frontmatter.tags]} />
      <section className="single-post">
        <div className="single-post__frontmatter">
          <h1>{frontmatter.title}</h1>
          <span>Published: {frontmatter.date}</span>
          <Img
            className="featured-image"
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
          />
        </div>
        <div
          className="single-post__body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  );
};

export default postTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
