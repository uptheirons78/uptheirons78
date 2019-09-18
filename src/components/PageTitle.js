import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: #03afc2;
  opacity: 0.7;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    font-size: 2.6rem;
  }
`;

const PageTitle = props => {
  return <Title className={`page-title`}>{props.pageTitle}</Title>;
};

export default PageTitle;
