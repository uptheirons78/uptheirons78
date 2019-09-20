import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SlideView from "../components/SlideView";
import PageTitle from "../components/PageTitle";
import { useSpring, animated } from "react-spring";

const Test = ({ data }) => {
  const fade = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO title="Mauro Bono - Projects" />
      <animated.div style={fade}>
        <PageTitle pageTitle="My Projects" />
        <SlideView projects={data.allProjectsJson.edges} />
      </animated.div>
    </Layout>
  );
};

export default Test;

//graphql query to collect Projects data
export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          website
          github
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
