import React from "react";
import CardRecetas from "./pages/recipes/CardRecetas";
import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <section>
        <h1 className="text-center">El Codigo de la cocina</h1>
      <Row className="  justify-content-around  container  mx-auto">
        <CardRecetas></CardRecetas>
        <CardRecetas></CardRecetas>
        <CardRecetas></CardRecetas>
        <CardRecetas></CardRecetas>
        <CardRecetas></CardRecetas>
        <CardRecetas></CardRecetas>
      </Row>
    </section>
  );
};

export default Home;
