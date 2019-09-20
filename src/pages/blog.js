import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import SEO from "../components/seo";
import PageTitle from "../components/PageTitle";
import { useSpring, animated, config } from "react-spring";

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

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
      <SEO title="Mauro Bono - Blog" />
      <animated.div style={fade}>
        <PageTitle pageTitle="Blog" />
      </animated.div>
      <animated.div style={display}>
        <div className="post-list">
          {posts.map(post => {
            return <Post key={post.node.id} post={post.node} />;
          })}
        </div>
      </animated.div>
    </Layout>
  );
};

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            path
            author
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
