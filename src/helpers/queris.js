const API_receta = import.meta.env.VITE_API_RECETAS;

//POST
export const altaDeRecetasApi = async recetaNueva => {
  try {
    const respuesta = await fetch(API_receta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
//GET PARA OBTENER
export const mostraRecetaAPI = async () => {
  try {
    const respuesta = await fetch(API_receta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// Delete

export const borrarRecetaAPI = async id => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`, {
      method: "DELETE"
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
