

function obtenerNombre(codigoNave){
    return(codigoNave.split(":"));
}
console.log(`El nombre del conductor de la nave ARQ2555 es: ${obtenerNombre("ARQ2555: Bel-Sun")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2556 es: ${obtenerNombre("ARQ2556:Nodin Chavdrin")[1]}`);
console.log(`El nombre del conductor de la nave ARQ2557 es: ${obtenerNombre("ARQ2557:Finn")[1]}`);