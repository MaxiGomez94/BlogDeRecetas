import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import '../../../CardReceta.css';

const CardRecetas = ({ receta }) => {
  const maximoCaracteres = 100;
  const [mostrarCompleto, setMostrarCompleto] = useState(false);
  const descripcionCorta = mostrarCompleto
    ? receta.descripcion
    : receta.descripcion.slice(0, maximoCaracteres);

  const toggleMostrarCompleto = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  return (
    <Col md={5} lg={4} xxl={3} className="py-2">
      <Card className="border-0 mt-2 card-media">
        <Card.Img
          variant="top"
          src={receta.imagen}
          className="img-fluid img-card"
        />
        <Card.Body>
          <Card.Title>{receta.nombreRecetas}</Card.Title>
          <Card.Text>
            {mostrarCompleto ? receta.descripcion : `${descripcionCorta}${receta.descripcion.length > maximoCaracteres ? "..." : ""}`}
            {receta.descripcion.length > maximoCaracteres && (
              <span
                className="text-primary cursor-pointer"
                onClick={toggleMostrarCompleto}
              >
                {mostrarCompleto ? " Ocultar" : " Ver más"}
              </span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRecetas;
