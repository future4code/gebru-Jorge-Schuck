// EXERCICIO 3
// Crie uma aplicação Node que receba uma string 
// representando uma tarefa. O programa deve adicionar a nova 
// tarefa em uma variável que represente uma lista de tarefas. 
// A lista de tarefas pode estar criada antes da execução 
// do código. Após adicionar o item à lista, exiba a lista atualizada.

// Para Rodar: npm start "tarefa1", "tarefa2"

const task = process.argv[2]
const task1 = process.argv[3]
const taskList = []

const addTask = () => {
    const newList = [...taskList, task, task1]
    console.log("Tarefa adicionada!")
    console.log("Tarefas: ", newList)
}
addTask()