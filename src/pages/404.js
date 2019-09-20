import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Mauro Bono - 404" />
    <StyledTitle>404</StyledTitle>
    <p>You just hit a route that doesn&#39;t exist ... the sadness.</p>
    <p>Come on my friend, it's time to go back home.</p>
  </Layout>
);

export default NotFoundPage;

const StyledTitle = styled.h1`
  color: #03afc2;
  font-size: 30rem;

  @media screen and (max-width: 700px) {
    font-size: 20rem;
  }
`;
