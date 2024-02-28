import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { altaDeRecetasApi, obtenerRecetaAPI } from "../../helpers/queris";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams } from "react-router";

const FormRecipes = ({ editar,titulo }) => {
  const {
    //ESTO ES DE REACT FORM
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

const {id}= useParams();

useEffect(()=>{
if(editar){
  cargarRecetas()
 
}
},[])

const cargarRecetas = async ()=>{
  const respuesta = await obtenerRecetaAPI(id)
  if(respuesta.status === 200){
    const recetaBuscada = await respuesta.json();
    setValue('nombreRecetas', recetaBuscada.nombreRecetas);
    setValue('imagen', recetaBuscada.imagen);
    setValue('ingredientes', recetaBuscada.ingredientes);
    setValue('instrucciones', recetaBuscada.instrucciones);
    setValue('descripcion', recetaBuscada.descripcion);
  }
}

  const onSubmit = async recetas => {
    if (editar) {

    } else {
      const respuesta = await altaDeRecetasApi(recetas);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta Cargada!",
          text: `La Receta "${recetas.nombreRecetas}" fue cargada correctamente`,
          icon: "success",
        });
        // limpiar formulario
        reset();
      } else {
        Swal.fire({
          title: "Receta no cargada",
          text: `La Receta "${recetas.nombreRecetas}" no pudo ser creada, intentelo mas tarde!`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <h1 className=" text-center">{titulo}</h1>
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
                value: 100,
                message: "maximo permitido es de 100",
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
                value: 200,
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
            {...register("instrucciones", {
              required: "carga las intrucciones de cocion",
              minLength: {
                value: 4,
                message: "minimo de caracter es de 4",
              },
              maxLength: {
                value: 1000,
                message: "maximo permitido es de 1000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.instrucciones?.message}
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
                value: 300,
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
