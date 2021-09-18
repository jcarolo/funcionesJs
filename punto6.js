function matricularPadawan(nombre, edad, planeta, estatura, clasificarActividad){

    let padawan={
        nombre: nombre,
        edad: edad,
        planeta:planeta,
        estatura:estatura
    }

console.log(padawan);

clasificarActividad(padawan.edad)

}

matricularPadawan ("Mini Yoda", 15, "Naboo", 1.75, function(edad){
    if(edad>0 && edad<=15){
        console.log("La actividad asignada será el manejo de la fuerza");
    }else{
        console.log("La actividad asignada será el manejo de sable de luz");
    }
})




