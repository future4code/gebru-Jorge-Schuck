// Exercícios de interpretação de código
//1.
// let array
// console.log('a. ', array)
// //a. array

// array = null
// console.log('b. ', array)
// //b. null aqui ele imprime o valor null da array

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //c. 11 Aqui ele o tamanho da array

// let i = 0
// console.log('d. ', array[i])
// //d. 3 por que i= 0 e 0 é o primeiro item da array

// array[i+1] = 19
// console.log('e. ', array)
// //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] ele substituiu o valor de i+1 na array
// // i+1 refere-se a 0 +1 então na posição do 4 na array, igual a 19

// const valor = array[i+6]
// console.log('f. ', valor)
// f. 9 ele vai imprimir a variavel valor que é o i+6 sendo o 
// 0 contando mais 6 elementos, entao ..9 

//2. SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código

//1. 

// const nome = prompt('Qual o seu nome?')
// const email = prompt('Qual o seu email')

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//2.

// let comidas = ['pizza', 'lasanha', 'churrasco', 'massa', 'pastel']
// //a) 
// // console.log(comidas)
// //b)
// // console.log(comidas['0'])
// // console.log(comidas['1'])
// // console.log(comidas['2'])
// // console.log(comidas['3'])
// // console.log(comidas['4'])
// //c)
// let comidaUsuario = prompt('Qual sua comida preferida')


// let trocar = comidas.splice(1, 1)
// let add = comidas.splice(1, 0, comidaUsuario)

// console.log(comidas)

//3.
// let listaDeTarefas = []
// let tarefa1 = prompt('Digite uma tarefa a realizar')
// let armazena1 = listaDeTarefas.push(tarefa1)
// let tarefa2 = prompt('Digite outra tarefa a realizar')
// let armazena2 = listaDeTarefas.push(tarefa2)
// let tarefa3 = prompt('Digire mais uma tarefa a realizar no dia')
// let armazena3 = listaDeTarefas.push(tarefa3)
// // console.log(listaDeTarefas)
// let tarefaRealizada = prompt('Digite o índice de uma tarefa já realizada')
// let tirarTarefa = listaDeTarefas.splice(tarefaRealizada, 1)
// console.log(listaDeTarefas)

//DESAFIOS
//1. 
// let frase = ['Que','dia', 'feliz']

// console.log(frase.join(""))


//2.
// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// const indice = array.indexOf("Abacaxi")
// console.log(indice, array.length)
