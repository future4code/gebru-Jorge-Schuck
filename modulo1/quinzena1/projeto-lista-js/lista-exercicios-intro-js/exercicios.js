// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("digite a altura"))
let largura = Number(prompt("digite a largura"))
let area = altura * largura
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Digite o ano atual"))
let anoNascimento = Number(prompt("Digite o ano de nascimento"))
let idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Digite seu nome")
const idade = prompt("Digite sua idade")
const email = prompt("Digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const coresfav1 = prompt("Qual sua cor favotira?")
const coresfav2 = prompt("Diga Outra cor favorita")
const coresfav3 = prompt("Mais uma cor favorita")
ascores = [coresfav1, coresfav2, coresfav3]
console.log(ascores)




}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return (string1 > string2)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let array2 = array.slice()
array2[array.length-1]= array [0]
array2[0]= array [array.length-1]
return array2
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

let anoAtual = prompt('Qual é o ano atual?')
let anoNascimento = prompt('Qual seu Ano de Nascimento?')
let anoRg = prompt('Qual o ano da emissão de seu RG')
let idade = anoAtual - anoNascimento 
if (idade <= 20){
  console.log((anoAtual - anoRg)>=5)}
  else if (idade >= 21){
    console.log((anoAtual - anoRg)>=10)}
    if (idade >= 51){
      console.log((anoAtual - anoRg)>=15)}




}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

let anoBissexto = ( ( ano % 4 == 0)  && ((ano % 100 != 0 ) || (ano % 400 == 0) ))
return anoBissexto
} 

}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}