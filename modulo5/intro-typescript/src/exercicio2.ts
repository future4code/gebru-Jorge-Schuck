//- Exercício 2
    
   // A seguinte função em JavaScript pergunta ao usuário suas
   //  três cores favoritas e imprime no console um array que 
   //  contenha essas três cores. Refatore a função para o Typescript.
    

 function imprimeTresCoresFavoritas (cor1: string, cor2: string, cor3: string): string[]{
    const arrayDeCores = []
    arrayDeCores.push(cor1,cor2,cor3) 
    return arrayDeCores
}
console.log(imprimeTresCoresFavoritas("Vermelho", "Azul", "Verde"))