// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 return array.sort(function(a, b){
     return a - b
 })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  var pares = array.filter(par =>(par % 2 === 0))
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let array2 = []
  for(number of array){
    if(number % 2 === 0){
    array2.push(number*number)}
  }
  return array2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  if(num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  }else{
    maiorNumero = num2
    menorNumero = num1
  }
  let divisor = maiorNumero % menorNumero === 0
  
  const objetoEntreDoisNumeros = {
  maiorNumero: maiorNumero,
  maiorDivisivelPorMenor: divisor,
  diferenca: (maiorNumero - menorNumero)
}
return objetoEntreDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayDePares = []
   for(let num = 0; arrayDePares.length < n; num++){
     if (num % 2 === 0){
       arrayDePares.push(num)
     }
   }
   return arrayDePares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  novoObjeto = {...pessoa, nome:"ANÔNIMO"}
  return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let pessoasAutorizadas = pessoas.filter(pessoa => (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60))
 return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter(pessoa => (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade > 60))
 return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (obj of contas) { 
    for (compra of obj.compras) {
       obj.saldoTotal = obj.saldoTotal - compra } 
       obj.compras = []
       } return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome.localeCompare(b.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
 
}