import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  max-width: 100%;
  height: 60vh;
  position: relative;
`;

const StyledLeft = styled.section`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;

  .image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-40%) translateY(-60%);
    z-index: 100;
    max-width: 400px;
    box-shadow: 10px 10px 7px 2px rgba(0, 0, 0, 0.2);

    img {
      position: relative;
      object-fit: cover;
      width: 400px;
      height: auto;

      @media screen and (max-width: 1024px) {
        max-width: 360px;
      }

      @media screen and (max-width: 869px) {
        max-width: 320px;
      }

      @media screen and (max-width: 600px) {
        max-width: 300px;
      }
    }

    figcaption {
      position: absolute;
      top: -10%;
      left: -8%;
      z-index: 100;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      padding: 0.5rem;
      font-size: 1.4rem;
      color: #f4f4f4;
      background: #03afc2;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (max-width: 1024px) {
      max-width: 360px;
      top: 40%;
    }
    @media screen and (max-width: 869px) {
      max-width: 320px;
    }
    @media screen and (max-width: 744px) {
      left: 70%;
      top: 35%;
    }
    @media screen and (max-width: 600px) {
      left: 75%;
      top: 35%;
    }
  }
`;

const StyledRight = styled.section`
  padding: 1rem 3rem;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;

  .info {
    width: 80%;
    position: absolute;
    bottom: 25%;
    right: 10%;
    padding: 0 1rem;

    @media screen and (max-width: 869px) {
      width: 70%;
      bottom: 30%;
      right: 15%;
    }

    @media screen and (max-width: 744px) {
      width: 120%;
      bottom: 22%;
      right: 38%;
      z-index: 100;
      background: #fff;
      box-shadow: 10px 10px 7px 2px rgba(0, 0, 0, 0.2);
      padding: 1rem 2rem;
      opacity: 0.9;
    }

    @media screen and (max-width: 600px) {
      width: 130%;
      bottom: 16%;
      right: 20%;
    }

    h2 {
      font-size: 2.6rem;
      color: #606060;
      margin: 1rem 0;
      @media screen and (max-width: 869px) {
        font-size: 2.2rem;
      }
    }

    p {
      font-size: 1.6rem;
      color: #5a5a5a;
      margin-bottom: 1rem;
      text-align: justify;
      @media screen and (max-width: 869px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.4rem;
      }
    }

    ul {
      width: 60%;
      display: flex;
      list-style-type: none;
      justify-content: space-between;
      @media screen and (max-width: 600px) {
        width: 70%;
      }

      a,
      a:active,
      a:focus {
        font-family: "Open Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: #03afc2;
        text-decoration: none;
        box-shadow: 0px 0px 0px 0px #03afc2 inset;
        border-bottom: 2px solid #03afc2;
        transition: all 350ms ease-in-out;
        outline: none;

        @media screen and (max-width: 600px) {
          font-size: 1.4rem;
        }

        &:hover {
          box-shadow: 0px -30px 0px 0px #03afc2 inset;
          color: #f4f4f4;
        }
      }
    }
  }
`;

const Page = props => {
  const { date, title, description, website, github, thumbnail } = props;
  return (
    <StyledPage>
      <StyledLeft>
        <figure className="image-container">
          <img src={thumbnail} alt={title} />
          <figcaption>{date}</figcaption>
        </figure>
      </StyledLeft>
      <StyledRight>
        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul>
            <li>
              <a href={website}>Website</a>
            </li>
            <li>
              <a href={github}>Github</a>
            </li>
          </ul>
        </div>
      </StyledRight>
    </StyledPage>
  );
};

export default Page;
