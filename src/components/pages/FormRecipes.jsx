import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormRecipes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = recetas => {
    console.log(recetas);
  };

  return (
    <>
      <h1 className=" text-center"> Nuevas Recetas </h1>
      <Form
        className="container py-4 form-bg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId="formTitle">
          <Form.Label>Nombre de la Receta:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa la receta"
            {...register("nombreRecetas", {
              required: "No ingresaste Una Receta",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 20,
                message: "maximo permitido es de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreRecetas?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Ingresa la URL de imagen:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una URL: WWW. IMG.COM"
            {...register("imagen", {
              required: "No ingresaste Una imagen",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 20,
                message: "maximo permitido es de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formIngredients">
          <Form.Label>Ingredientes:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingresa los ingredientes"
            {...register("ingredientes", {
              required: "No ingresaste los ingredientes",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 20,
                message: "maximo permitido es de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formInstructions">
          <Form.Label>Instrucciones:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingresa las instrucciones"
            {...register("intrucciones", {
              required: "carga las intrucciones de cocion",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 20,
                message: "maximo permitido es de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.intrucciones?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una descripción breve"
            {...register("descripcion", {
              required: "ingresa una descripcion breve",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 20,
                message: "maximo permitido es de 20",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Guardar Receta
        </Button>
      </Form>
    </>
  );
};

export default FormRecipes;
