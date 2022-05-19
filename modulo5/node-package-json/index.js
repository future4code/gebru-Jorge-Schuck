//Exercicio 1
// a) Responda como comentário no seu código: como fazemos para 
// acessar os parâmetros passados na linha de comando para o Node?

// R: São acessados pelo process.argv[]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores,
// imprima no console uma mensagem que siga a seguinte estrutura:

// const name = process.argv[2]
// const age = Number(process.argv[3])



// console.log("Olá, (name)! Você tem (age) anos")

//c)  Altere o programa 
//acima para que mostre também a sua idade daqui a sete anos.

//  const name = process.argv[2]
//  const age = Number(process.argv[3])

//      console.log(`Ola, ${name}! Você tem ${age} anos. Em sete anos você
//       terá ${age + 7}.`)

//EXERCICIO 2
// Crie uma aplicação Node que recebe uma string representando uma 
// operação matemática e dois valores numéricos. O retorno deverá ser o 
// resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operation = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch(operation){
// 	case "soma":
// 		console.log(num1 + num2)
// 		break;
// 	case "subt":
// 		console.log(num1 - num2)
// 		break;
//     case "div":
//         console.log(num1 / num2)
//         break;
//     case "mult":
//         console.log(num1 * num2)
//         break;
// }

// EXERCICIO 3
// Crie uma aplicação Node que receba uma string 
// representando uma tarefa. O programa deve adicionar a nova 
// tarefa em uma variável que represente uma lista de tarefas. 
// A lista de tarefas pode estar criada antes da execução 
// do código. Após adicionar o item à lista, exiba a lista atualizada.

// const task = process.argv[2]
// const task1 = process.argv[3]
// const taskList = []

// const addTask = () => {
//     const newList = [...taskList, task, task1]
//     console.log("Tarefa adicionada!")
//     console.log("Tarefas: ", newList)
// }
// addTask()












