import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/PageTitle";
import { useSpring, animated, config } from "react-spring";

const AboutPage = () => {
  const fade = useSpring({
    config: config.slow,
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  return (
    <Layout>
      <SEO title="Mauro Bono - About" />
      <animated.div style={fade}>
        <PageTitle pageTitle="About" />
      </animated.div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem
          voluptas repudiandae, repellat doloribus modi reiciendis error commodi
          quod necessitatibus hic cupiditate quam non mollitia, aspernatur,
          nostrum eveniet fuga quisquam asperiores aliquid sint laudantium
          dolore quia. At assumenda iste, facere, consequuntur perferendis
          blanditiis officiis dignissimos quod, consequatur asperiores totam
          praesentium?
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus
        asperiores ipsa nulla eaque unde praesentium explicabo similique vel
        optio deserunt commodi amet dolore repellendus.
      </p>
    </Layout>
  );
};

export default AboutPage;
