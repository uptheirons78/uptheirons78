import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import me from "../images/mauro.jpg";
import { useSpring, animated } from "react-spring";

const IndexPage = props => {
  const name = "Mauro \nBono";

  const fadeLeft = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });
  const fadeRight = useSpring({
    config: { duration: 1200 },
    from: { opacity: 0, marginLeft: 300 },
    to: { opacity: 1, marginLeft: 0 },
  });
  const fadeBottom = useSpring({
    config: { duration: 1200 },
    from: { opacity: 0, marginTop: 200 },
    to: { opacity: 1, marginTop: 0 },
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section className="home-container">
        <animated.div
          className="home-container__title-container"
          style={fadeLeft}
        >
          <h1>{name}</h1>
        </animated.div>
        <animated.div
          className="home-container__image-container"
          style={fadeRight}
        >
          <img src={me} alt="mauro bono" />
        </animated.div>
        <animated.div
          className="home-container__info-container"
          style={fadeBottom}
        >
          <p>Hi, I'm Mauro.</p>
          <p>I am a Web Developer based in Rome, Italy.</p>
          <p>
            I'm specialized in HTML, CSS, JavaScript, ReactJS and Gatsby on the
            Front-End. Comfortable with NodeJS and MongoDB on the Back-End. I've
            been working with Wordpress and PHP since 2008. Check out my Github
            profile.
          </p>
        </animated.div>
      </section>
    </Layout>
  );
};

export default IndexPage;
