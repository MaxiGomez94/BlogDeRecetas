import { Button, Table,} from 'react-bootstrap';
import ItemRecipes from './recipes/ItemRecipes';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
      <Table className='container'>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>URL</th>
          <th>Ingredientes</th>
          <th>Descripción</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemRecipes/>
      </tbody>
        <Button as={Link} to='/formrecipes/crear'>Nueva Recetas</Button>
    </Table>
  );
};

export default Admin;
