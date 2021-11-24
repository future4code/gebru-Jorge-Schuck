//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1.
//a)
// será impresso 10 e 50 na vertical pois 
// a variavel está multiplicando por 5 dentro do escopo
// da função, e na hora de imprimir, a variavel ganha valores

//b)
// nao imprime nada pois não fizemos a saída da função

//2.
//a)
// ele vai procurar, com o includes, no texto 
// inserido pelo usuário a palavra cenoura, retornando
//um booleano
//b) saida será 3 trues, pois ele detecta a presença
//da palavra cenoura independente de Maiusculas

// EXERCICIOS DE ESCRITA DE CÓDIGO

//1.
//a)
// function escreverTexto(){
    
//     return ("Eu sou Jorge, tenho 40 anos, moro no Rio grande do Sul e sou estudante")
// }  
// console.log(escreverTexto())

//b)
// function maisFrase(nome, idade, cidade, profissao){
    

//     return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// console.log(maisFrase("Jorge", 40, "Teutonia", "Lider de Rouparia"))

//2.
// a)

// function somar(num1, num2){
//     return (num1 + num2)
//  }
//  console.log(somar(40, 50))

//b)
//  const comparar = (num1, num2) => {
//     return (num1 >= num2)
    
// }
// console.log(comparar(6, 8))

//c)
// function numeroPar(numero){
//     const par = (numero % 2 === 0)
//     return (par)
// }
// console.log(numeroPar(3))

//d)
// function formatar(mensagem){
//     const frase = mensagem.length
//     const letra = mensagem.toUpperCase()
    
//     console.log(frase, letra)

// }
// formatar("Alo Galera")

//3.
// const num1 = Number(prompt('Digite um Número'))
// const num2 = Number(prompt('Digite outro Número'))
// const frase = "Numeros inseridos:"
// console.log(frase, num1,",", num2)
// const palavra = "Soma:"
// const palavra1 = "Diferença:"
// const palavra3 = "Multiplicação:"
// const palavra4 = "Divisão:"
// function somar(num1, num2){
//     console.log("Soma:", num1 + num2)
// }
// somar(num1, num2)
// function subtracao(num1, num2){
//     console.log("Diferença:", num1 - num2)
// }
// subtracao(num1, num2)
// function multiplicar(num1, num2){
//     console.log("Multiplicação:", num1 * num2)
// }
// multiplicar(num1, num2)
// function divisao(num1, num2){
//     console.log("Divisão:", num1 / num2)
// }
// divisao(num1, num2)

//DESAFIOS
//1.
   
// }
// numerar = (num3) => {
// num3 = 50
// console.log(num3)
// }

//  somar = (num1, num2) => {
// console.log(num1 + num2)
// }
// somar(30, 30, numerar())

//2.


// const pitagoras = (lado1, lado2) => {
//     const valorlado1 = lado1**2
//     const valorlado2 = lado2**2
//     const valorhipotenusa = (valorlado1 + valorlado2) ** (1/2)
//     return valorhipotenusa
// }
// console.log(pitagoras)
