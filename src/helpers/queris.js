 const API_receta = import.meta.env.VITE_API_RECETAS;

 //POST
 export const altaDeRecetasApi= async(recetaNueva)=>{
    try{
        const respuesta = await fetch(API_receta, {
            method: "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(recetaNueva)
        });
        return respuesta
    }catch(error){
        console.log(error);
    }

 }

 export const mostraRecetaAPI= async()=>{
    try{
        const respuesta = await fetch(API_receta);
        console.log(respuesta)
        return respuesta;

    }catch(error){
        console.log(error)
    }
 }