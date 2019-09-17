import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const name = "Mauro \nBono";

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-wrapper">
        <h1 className="home-wrapper__title">{name}</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <div className="home-wrapper__info">
          <p>Hi, I'm Mauro.</p>
          <p>I am a Web Developer based in Rome, Italy.</p>
          <p>
            I'm specialized in HTML, CSS, JavaScript, ReactJS and Gatsby on the
            Front-End. Comfortable with NodeJS and MongoDB on the Back-End. I've
            been working with Wordpress and PHP since 2008. Check out my Github
            profile.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "mauro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
