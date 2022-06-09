import express from "express";
import { response, request } from "express";
import { AddressInfo } from "net";
import cors from "cors"
import { v4 as generateId } from 'uuid';
import { stringify } from "querystring";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

// - Exercício 1
    
//     Faça novamente a instalação e configuração do Express
//      na pasta do exercício. Para testar, crie um endpoint 
//      que aponte para o path “/ping”. Esse endpoint pode 
//      responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints
//      que buscam [afazeres](https://jsonplaceholder.typicode.com/todos)
//       (”*to dos”*). Crie uma variável de tipo para representar cada afazer.

type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// - Exercício 3
    
    // Crie um array de afazeres para servir como base
    //  de dados da nossa API e utilize a tipagem desenvolvida
    //   no exercício anterior.
    
    const arrayAfazeres: Afazer[] = [
        {userId: 1, id: 10, title: "Jogar Videogame", completed: true},
        {userId: 2, id: 20, title: "Lavar o chão", completed: false},
        {userId: 3, id: 30, title: "Assistir filme", completed: true},
        {userId: 4, id: 40, title: "Trabalhar", completed: false},
        {userId: 5, id: 50, title: "Desenhar", completed: true}
    ]
    app.get("/afazeres", (req, res) =>{
        res.status(200).send(arrayAfazeres)
    })

    // - Exercício 4
    
    // Construa um endpoint que retorne todos os afazeres do exercício
    //  anterior de acordo com um único status, ou seja,
    //  retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

    app.get("/afazeres/afazeresTrue", (req, res) => {  
        try{
            const onlyTrue: Array<any> = arrayAfazeres.filter((completos) =>{
                
                return completos.completed === true
            })
            res.status(200).send(onlyTrue)
        }
        catch (error: any){
            res.end ("Erro")
        }
    })


    // - Exercício 5
    // Construa um endpoint de criação de afazer.
    //  A resposta deve retornar o array de afazeres atualizado.

    app.post("/create", (req, res) =>{
        try{
            const nomeDoAfazer = req.body.title
            if(!nomeDoAfazer)
                throw new Error('É necessario informar um nome para a nova playlist');
            const newListaDeAfazeres: any = {
                userId: req.query.userId,
                id: generateId(),
                title: req.body.title,
                completed: req.body.completed

            }

        arrayAfazeres.push(newListaDeAfazeres)
        res.send(arrayAfazeres)

        } 
        catch(error: any){
            res.status(404).end ("Ops Algo errado!!")
        }
    })

    // - Exercício 6
    
    // Construa um endpoint de edição do
    //  status de um afazer, ou seja, de completo para incompleto e vice-versa.

    app.put("/afazeres/:postId", (req, res) => {
        const postId = Number(req.params.postId);
        const editAfazer = arrayAfazeres.filter((afazer) => {
            return afazer.userId === postId
        }).map((afazer) => {
            return afazer = {
                userId: afazer.userId,
                id: afazer.id,
                title: afazer.title,
                completed: !afazer.completed
            }
        })
        res.send(editAfazer);
    })

    // - Exercício 7
    
    // Construa um endpoint que deleta um determinado afazer
    //  de acordo com sua id.

    app.delete("/deletaTarefa/:userId", (req, res) => {
        const tarefaId = Number(req.params.userId);
        
        const novaLista = arrayAfazeres.filter((deletaTarefa) => {
            return deletaTarefa.userId !== tarefaId;

        }); 
        
        res.status(200).send(novaLista);
    })

    // - Exercício 8
    
    // Construa um endpoint que retorne todos os 
    // afazeres de uma determinada id de usuário.
    
    app.get("/tarefasUsuario/:userId", (req, res) => {
        const userId = Number(req.params.userId)
        const listaTarefas = arrayAfazeres.filter((tarefa) => {
            return userId === tarefa.userId;
        })
        .map((tarefa) => {
            return tarefa.title;
        });
        res.send(listaTarefas);
    });
    