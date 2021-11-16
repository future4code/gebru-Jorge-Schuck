//Exercicio de Interpretação
//1-
/* a. false pois com operador &&
true e false sempre dará false.*/
/* b. o resultado é false pois um true com um false resulta em false,
mais uma negação de bool2( = true) então fica false também.*/
/* c.aparecerá na tela true, por que o resultado está sendo
especificado em a. (false), negação de false é true, entre parenteses
temos ou, que dará true. true && true, retorna true. */
/* retornará como booleano pois está sendo usado operador
lógico true e false */

/*2- na verdade serão impressas duas strings pois o prompt
sempre retornará string, então devemos converter as strings*/

/* 3- para converter em  numeros adicionamos Number
 antes de prompt em cada variavel*/

 //Exercicio de Escrita de Codigo

 //1. 

//  const idade1 = Number(prompt("Qual a sua idade"))
//  const idade2 = Number(prompt("Qual a idade do seu melhor amigo?"))
//  let resposta = idade1 < idade2
//  resposta = idade1 > idade2
//  diferencaIdade = idade1 - idade2
//  console.log("Sua idade é maior do que a do seu amigo?", resposta, "Temos", diferencaIdade, "anos", "de diferença")

//2.

//  let numeroPar = Number(prompt("Insira um numero par"))
//  resultado = numeroPar % 2
//  console.log("Resultado", numeroPar, "Resto -->", resultado) 

//  c) notei que o resto sempre é 0 pois a divisao é possivel sempre.
//  d) ao inserir numero impar ele retorna o resto = 1 pois a divisão nao foi possivel
// igualmente entao deu o resto.

//3. 

// let idadeAnos = Number(prompt("Qual sua Idade ?"))
// idadeMeses = idadeAnos * 12 
// idadeEmDias = idadeAnos * 365
// idadeEmHoras = idadeEmDias * 24
// console.log("Minha Idade em anos é", idadeAnos, "anos")
// console.log("Minha Idade em meses é", idadeMeses, "meses")
// console.log("Minha Idade em dias é", idadeEmDias, "dias")
// console.log("Minha Idade em Horas é ", idadeEmHoras, "horas")

//4.

// let num1 = Number(prompt("Digite um Número"))
// let num2 = Number(prompt("Agora digite outro número"))

// res1 = num1 > num2
// res2 = num1 === num2
// res3 = num1 % num2 === 0
// res4 = num2 % num1 === 0
// console.log("O primeiro numero é maior que segundo?", res1)
// console.log("O primeiro numero é igual ao segundo?", res2)
// console.log("O primeiro numero é divisível pelo segundo?", res3)
// console.log("O segundo numero é divisível pelo primeiro?", res4)

//DESAFIO
//1.


//2. 

// let kwatt = Number(prompt(" Digite os Kwatts totais de sua Residência"))
//  valortotalkwatt = kwatt * 0.05
//  porscentagemdesconto = valortotalkwatt * 15 / 100
//  console.log("Total da Sua conta de Luz é", valortotalkwatt, "reais")
//  console.log("Vc Tem", porscentagemdesconto, "reais", "de desconto")

3. 
let x = Number(prompt("Insira o valor original da unidade em pés"))
const lb = 20
kg = lb / 2.205
const oz = 10.5
kg2 = oz / 35.274
const mi = 100
m = mi * 1.609
let pes = 50
m2 = pes / x
const gal = 103.56
lt = gal * 379
const xic = 450
lt2 = xic * 0.24

console.log(lb, "lb equivalem a ", kg, "kg")
console.log(oz, "oz equivalem a ", kg2, "kg")
console.log(mi, "mi equivalem a ", m, "m")
console.log(pes, "pes equivalem a ", m2, "m")
console.log(gal, "gal equivalem a ", lt, "l")
console.log(xic, "xic equivalem a ", lt2, "l")
