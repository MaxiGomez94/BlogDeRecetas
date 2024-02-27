import { Button } from "react-bootstrap";

const ItemRecipes = () => {
  return (
    <tr>
      <td># 1</td>
      <td> Tortilla De Papa</td>
      <td>
        {" "}
        <img
          src="https://www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-espa%C3%B1ola.jpg"
          alt="tortila de papa"
          className="img-fluid "
          width={100}
        />
      </td>
      <td>huevos,papa,aceite,</td>
      <td>La Tortilla de papa es un manjar</td>
      <td>cocinar a fuego lento 20 minutos</td>
      <td>
        <Button variant="warning" className="me-lg-2">
            editar
        </Button>
        <Button variant="danger">
          delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecipes;
