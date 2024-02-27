import { Button } from "react-bootstrap";

const ItemRecipes = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreRecetas}</td>
      <td>
        {" "}
        <img
          src={receta.imagen}
          alt={receta.nombreRecetas}
          className="img-fluid "
          width={100}
        />
      </td>
      <td>{receta.ingredientes}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.instrucciones}</td>
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
