
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import '../../../CardReceta.css';

const CardRecetas = () => {
  return (
    <Col  md={5} lg={4} xxl={3} className="card-media py-3">
    <Card className="border-0 mt-4 card-media">
      <Card.Img
        variant="top"
        src="https://www.vivirbiencolmedica.com/wp-content/uploads/2022/09/comida-chatarra.jpg"
        className="img-fluid img-card "
      />
      <Card.Body>
        <Card.Title>Titulo De Recetas</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sed?
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default CardRecetas;
