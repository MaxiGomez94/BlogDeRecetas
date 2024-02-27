import { Button, Container, Table,} from 'react-bootstrap';
import ItemRecipes from './recipes/ItemRecipes';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <Container className=' table-responsive'>
      <div className=' text-center d-flex justify-content-between align-items-center mt-4'>
        <h1>Administrador De Recetas</h1>
      <Button as={Link} to='/admin/formRecipes'>Nueva Recetas</Button>

      </div>
      <Table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>URL</th>
          <th>Ingredientes</th>
          <th>Descripción</th>
          <th>Instrucciones</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemRecipes/>
      </tbody>
    </Table>
    </Container>
  );
};

export default Admin;
