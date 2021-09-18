//Configuro el cuerpo de la función principal

function robarPlano(id,despegarNave){
    if (id>0 && id<=10){
        console.log(`Nos robamos el plano ${id}`)
        despegarNave(null);
    }else{
        console.log(`El plano es falso`)
        despegarNave("error");
    }
}

robarPlano(5, function(error){
    if(error){
        console.log("Devolvete");
    }else{
        console.log("Arranquemos la nave")
    }
})