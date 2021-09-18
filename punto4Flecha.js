let energiaSableNegativa=0;
let sablesDeLuz=[2,4,-8,5,-6]

let calcularEnergiaNegativa= (sablesDeLuz,energiaSableNegativa)=>{
for (let i = 0; i < sablesDeLuz.length; i++) {

       if(sablesDeLuz[i]<0){
            
        energiaSableNegativa++
    
       }    else {
              console.log()
       }      
}
return(energiaSableNegativa)
}

console.log(`La energía negativa en los sables de luz es de: ${calcularEnergiaNegativa(sablesDeLuz,energiaSableNegativa)}sables`); 
