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
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaAPI = async id => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`, {});
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const modificarRecetaAPI = async (recetaEdit, id) => {
  try {
    const respuesta = await fetch(`${API_receta}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEdit),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin = {
  email: "admin@recetasblog.com",
  password: "Admin1234",
};
export const iniciarSesion = usuario => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("loginReceta", JSON.stringify(userAdmin.email));
    return true;
  } else {
    return false;
  }
};
