import { Button, Container, Table,} from 'react-bootstrap';
import ItemRecipes from './recipes/ItemRecipes';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { mostraRecetaAPI } from '../../helpers/queris';
import Swal from 'sweetalert2';

const Admin = () => {

  const [receta,setReceta]= useState([]);
  
  useEffect(()=>{
    obtnerRecetas();
   
  },[])

  const obtnerRecetas = async()=>{
    const respuesta= await mostraRecetaAPI();
    if(respuesta.status === 200){
     const  datos = await respuesta.json()
     setReceta(datos)
    }else{
      Swal.fire({
        title: "Receta no cargada",
        text: `La Receta "${recetas.nombreRecetas}" no pudo ser creada, intentelo mas tarde!`,
        icon: "error"
      });
    }
  }

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
        {
          receta.map((receta)=> <ItemRecipes key={receta} receta={receta} />)
        }
      </tbody>
    </Table>
    </Container>
  );
};

export default Admin;
