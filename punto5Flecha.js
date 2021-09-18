let calcularSalario=(salarioBasico, licencias, comision, deduccion)=>{

    comision=1500000*licencias;
    nomina=salarioBasico+comision;
    deduccion=nomina*0.05;
    salarioMensusal=nomina-deduccion;
   
    return(`El devengo mensual del vendedor es ${salarioMensusal}`);

}

console.log(calcularSalario(3500000,1,1500000,0.05));