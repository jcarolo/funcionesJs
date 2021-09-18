function calcularDistancia(coordenadax1,coordenadax2,coordenaday1,coordenaday2){
    
    return(`La distancia del planeta Yavina4 a Naboo es de: ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2)+Math.pow(coordenaday2-coordenaday1,2))} UA`);

}

console.log(calcularDistancia(0,50,0,-70));

let ditancia=calcularDistancia(0,20,0,-30); //almacenar resultado
