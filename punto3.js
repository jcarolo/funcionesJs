let temperatura1=5;
let temperatura2=56;
let temperatura3=12;
let temperatura4=1;

function calcularTemperaturaMaxima(temperatura1, temperatura2, temperatura3, temperatura4){
    return (Math.max(temperatura1,temperatura2,temperatura3,temperatura4));
}

function calcularTemperaturaMinima(temperatura1, temperatura2, temperatura3, temperatura4){
    return (Math.min(temperatura1,temperatura2,temperatura3,temperatura4));
}

let temperaturaMaxima=calcularTemperaturaMaxima(5,8,46,-13);
let temperaturaMinima=calcularTemperaturaMinima(5,8,46,-13);

console.log(`El promedio de temperatura es ${temperaturaMaxima+temperaturaMinima/2}°`);
