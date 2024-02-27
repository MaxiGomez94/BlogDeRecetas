import React, { useState,useEffect } from "react";
import CardRecetas from "./pages/recipes/CardRecetas";
import { Row } from "react-bootstrap";
import { mostraRecetaAPI } from "../helpers/queris";


const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const obtenerRecetas = async () => {
      const respuesta = await mostraRecetaAPI();
      const data = await respuesta.json();
      setRecetas(data); // Guardar las recetas en el estado
    };

    obtenerRecetas();
  }, []);

  return (
    <section>
      <h1 className="text-center">El Codigo de la cocina</h1>
      <Row className="justify-content-around container  align-items-center mx-auto">
        {recetas.map((receta) => (
          <CardRecetas key={receta.id} receta={receta}></CardRecetas>
        ))}
      </Row>
    </section>
  );
};

export default Home;

