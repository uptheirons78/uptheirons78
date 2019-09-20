import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Page from "./Page";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px 8px rgba(0, 0, 0, 0.1);
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

const SlideView = ({ projects }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {projects.map(project => {
          const {
            title,
            description,
            date,
            github,
            website,
            id,
          } = project.node;

          const thumbnail =
            project.node.thumbnailImage.childImageSharp.fluid.src;

          return (
            <Page
              key={id}
              title={title}
              description={description}
              date={date}
              github={github}
              website={website}
              thumbnail={thumbnail}
            />
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default SlideView;
