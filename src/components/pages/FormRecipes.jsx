
import { Form,Button } from 'react-bootstrap';

const FormRecipes = () => {
    return (
      <>
          <h1 className=' text-center'> Nueva Recetas </h1>
        <Form className='container py-4 form-bg '>
        <Form.Group controlId="formTitle">
          <Form.Label>Título de la Receta:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el título" required />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Ingresa la URL de imagen:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa una URL: WWW. IMG.COM" required />
        </Form.Group>

        <Form.Group controlId="formIngredients">
          <Form.Label>Ingredientes:</Form.Label>
          <Form.Control as="textarea" placeholder="Ingresa los ingredientes" required />
        </Form.Group>

        <Form.Group controlId="formInstructions">
          <Form.Label>Instrucciones:</Form.Label>
          <Form.Control as="textarea" placeholder="Ingresa las instrucciones" required />
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa una descripción breve" required />
        </Form.Group>

        <Button className='mt-4' variant="primary" type="submit">
          Publicar Receta
        </Button>
        </Form>
      </>
    );
};

export default FormRecipes;