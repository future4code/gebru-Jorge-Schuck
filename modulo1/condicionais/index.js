//Exercício de Interpretação

//1.
//a)
// O Codigo pede para que digite um número, esse número é
//armazenado numa variável e dpois é feita uma comparação

//b) Números pares

//c) Números ímpares

//2.
//a) Serve para mostrar o preço das frutas
//b) será impresso o preço da maçã
//c) a resposta seria 5 pois ele pula para o default

//3.

//a) está criando uma variavel pedindo ao usuário que 
//digite  o número que será armazenado nessa variável "numero"

//b) Dirá que o número passou no teste pois vai ficar
//no primeiro if. Se fosse -10 seguiria além do if pois -10 é
//menor que zero.

//c) Na verdade haverá pois pois o let mensagem está atribuindo
// a string "Essa mensagem é secreta!!!" logo abaixo do if quando
// na verdade se ela tivesse que estar em algum lugar teria que 
//estar fora do if, abaixo do const numero.

// Exercícios de Escrita de código

//1.

// const idade = Number(prompt("Qual sua idade?"))

// if (idade >= 18){
//     console.log("Você pode dirigir")
// }else{console.log("Você não pode dirigir")}

//2.

// const turno = prompt("Digite seu turno, M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === "M"){
//     console.log("Bom Dia!")
// }else if(turno === "V"){
//     console.log("Boa Tarde!")
// }else{
// console.log("Boa Noite!")} // aqui eu deixo sem comparaçao 
                          // pois boa noite será qualquer coisa
                          // que nao for V ou M 

//3.

// const turno = prompt("Digite seu turno, M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turno) {
//     case "M":
//     console.log("Bom Dia!")
//     break
//     case "V":
//     console.log("Boa Tarde!")
//     break
//     case "N":
//     console.log("Boa Noite!")
//      break
//      default:
//      console.log("Digite a letra certa")
// }

//4.
// const perguntaFilme = prompt("Qual gênereo de filme vamos assitir?")
// const perguntaPreco = prompt("Qual o valor do ingresso?")
// if (perguntaFilme === "fantasia" && perguntaPreco < 15){
//     console.log("Bom Filme!")
// }else{
//     console.log("Escolha outro filme. :(")
// }

//DESAFIO:

//1.

// const perguntaFilme = prompt("Qual gênereo de filme vamos assitir?")
// const perguntaPreco = prompt("Qual o valor do ingresso?")
// if (perguntaFilme === "fantasia" && perguntaPreco < 15){
//     const lanche = prompt("Qual lanchinho você vai comprar?")
//     console.log(`Bom filme! e Aproveite o seu ${lanche}`)
// }else{
//     console.log("Escolha outro filme. :(")
// }

// //2.
// const nome = prompt("Digite seu nome completo")
// const tipoJogo = prompt("Digite o Ttipo de jogo. IN-> internacional, DO-> Doméstico")
// const etapa = prompt("Digite a etapa de jogo. SF-> SemiFinal, DT-> Decisão terceiro lugar, FI-> Final")
// const categoria = prompt("Digite a Categoria. 1, 2, 3, 4")
// const quantidadeIngresso = prompt("Digite quantos ingressos você quer")
// console.log(`Nome do Cliente: ${nome}`)
// const valor1SF = 1.320
// const valor2SF = 880
// const valor3SF = 550
// const valor4SF = 220

// const valor1DT = 660
// const valor2DT = 440
// const valor3DT = 330
// const valor4DT = 170

// const valor1FI = 1980
// const valor2FI = 1320
// const valor3FI = 880
// const valor4FI = 330

// switch (tipoJogo){
//     case "IN":
//         console.log("Tipo de Jogo: Internacional")
//         break
//     case "DO":
//         console.log("Tipo de Jogo: Doméstico")
//         break
//         default:
//             console.log("Tipo de Jogo: nao definido")
// }
// switch (etapa){
//     case "SF":
//         console.log("Etapa de jogo: Semi Final")
//         break
//     case "DT":
//         console.log("Etapa de jogo: Decisão Terceiro Lugar")
//         break
//     case "FI":
//         console.log("Etapa de jogo: Final")
//         break
//         default:
//             console.log("Etapa de jogo: não definida")
// }
// switch (categoria){
//     case "1":
//         console.log("Categoria: 1")
//         break
//     case "2":
//         console.log("Categoria: 2")
//         break
//     case "3":
//         console.log("Categoria: 3")
//         break
//     case "4":
//         console.log("Categoria: 4")
//         break
//         default:
//             console.log("Categoria: Não definida")
// }


// console.log(`Quantidade de Ingressos: ${quantidadeIngresso}`)


// switch (valor1SF){
//     case "SF":
//         console.log()
// }
// console.log(`Valor do Ingresso: ${valor1SF || valor2SF || valor3SF || valor4SF * quantidadeIngresso}`)
