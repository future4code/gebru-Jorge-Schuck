//- Exercício 1
    
   // A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três
    // lados do triângulo: `ladoA, ladoB, ladoC` e retorna se ele
    //  é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.
    
   // **Código em JavaScript:** 
    
    
    function checaTriangulo(a: number, b:number , c:number):string {
      if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
    }
    console.log(checaTriangulo(40, 50, 20))
    