import React from "react";
import Stay from "./stay.js";
import Experience from "./Experience.js";
import Hero from "./Hero.js";
import Informed from "./Informed.js";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <Stay />
      <Experience />
      <Hero />
      <Informed />
    </Layout>
  );
};

export default Home;