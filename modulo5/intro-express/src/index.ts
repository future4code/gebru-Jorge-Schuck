import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//EXERCICIO 1
//Faça a instalação e configuração do Express na pasta
// do exercício. Para testar, crie um endpoint que
// aponte para a URL base da API. Esse endpoint pode
// responder apenas com um status ou mensagem fixa.

app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})

//EXERCÍCIO 2
//Acesse a API do JSONPlaceholder e observe os endpoints
// que buscam usuários. No seu projeto, crie uma variável
// de tipo para representar esse recurso. Eles devem
// possuir as seguintes propriedades:

//- id
//- name
//- phone
//- email
//- website

type Usuario = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//- Exercício 3
    
//Crie um array de usuários para servir como base de dados da nossa API.     
//Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉
//Não se esqueça de fazer a tipagem correta desse array.

const arrayUsuarios: Usuario[] = [
    { id: 1, name: "Jorge", phone: 6581794, email: "jorge@gmail.com", website: "www.jorge.com" },
    { id: 2, name: "Eduardo", phone: 55923, email: "eduardo@gmail.com", website: "www.eduardo.com" },
    { id: 3, name: "Pedro", phone: 89739274, email: "pedro@gmail.com", website: "www.pedro.com" }  
]

//- Exercício 4
    
// //Construa um endpoint que retorne os usuários
//  criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome
//  da rota e formato da resposta.

app.get("/usuarios", (req: Request, res: Response) => {
    res.status(200).send(arrayUsuarios);
});

// - Exercício 5
    
    // Acesse a API do JSONPlaceholder e observe os endpoints
    //  que buscam **posts**. No seu projeto, crie uma variável
    //   de tipo para representar esse recurso. Eles devem
    //    possuir as seguintes propriedades:
    
    // - id
    // - title
    // - body
    // - userId

    type Posts = {
        id: number,
        title: string,
        body: string,
        userId: number
    }

    // - Exercício 6

    // Crie um array de posts para incrementar a base de dados da nossa API. 
    // Você acha melhor criá-los dentro ou fora
    //  do array de usuários? Justifique com comentários
    //   no código.
    // Não se esqueça de fazer a tipagem correta desse array.

    const arrayPosts: Posts[] = [
        { id: 1, title: "titulo1", body: "teste1", userId: 1},
        { id: 2, title: "titulo2", body: "teste2", userId: 2},
        { id: 3, title: "titulo3", body: "teste3", userId: 3},
        { id: 4, title: "titulo4", body: "teste4", userId: 4}
    ]

    // - Exercício 7
    
    // Construa um endpoint que retorne os posts
    //  criados no exercício anterior.  
    // Use o JSONPlaceholder como exemplo para o
    //  nome da rota e formato da resposta. 

    app.get("/posts", (req: Request, res: Response) => {
        res.status(200).send(arrayPosts);
    });

    // - Exercício 8
    
    // Construa um endpoint que retorne os posts
    //  de um usuário em particular.
    // Use o JSONPlaceholder como exemplo para
    //  a construção da rota.

    app.get("/posts/:id", (req: Request, res: Response) => {
        
        res.status(200).send(arrayPosts);
    });
