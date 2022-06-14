import express, { query, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User, users, UserType } from "./data";


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// - **Exercício 1**
    
//     Vamos começar fazendo um endpoint que busque 
//     todos os usuários
//      de uma lista. A lista está disponível abaixo.

// a. Qual método HTTP você deve utilizar para isso?

// Devemos usar o GET

// b. Como você indicaria a entidade que está sendo manipulada?

// Entidade users

app.get("/users", (req, res) => {
    let erroCode = 400;
  
    try {
      if (!users) {
        erroCode = 400;
        throw new Error("Lista não encontrada.");
      }
  
      res.status(200).send(users);
  
    } catch (error: any) {
      res.status(erroCode).send(error.message);
    }
  });

//   - **Exercício 2**
    
//   Agora, vamos criar um novo endpoint, que
//    busque todos os usuários que tenham uma propriedade
//     `type` específica, recebendo apenas um `type` 
//     por vez. Após isso, responda:
  
app.get("/users/:type", (req, res) => {
    let codeError: number = 400
    try {
       const type = req.params.type;
 
       if (type !== UserType.ADMIN.toLowerCase() && type !== UserType.NORMAL.toLowerCase()) {
          throw new Error("parametro está incorreto")
       }
       const filterUser = users.filter(user => {
          return user.type.toLowerCase().includes(type.toLowerCase())
       })
 
       res.status(200).send(filterUser)
    } catch (error: any) {
       if(res.status(codeError).send({ message: error.message })){
          res.status(codeError).send({ message: error.message })
       }else{
          res.status(500).send("Erro no servidor!")
       }
    }
 })
//   *a.* Como você passou os parâmetros de
//    type para a requisição? Por quê?

//    foi passado com path parameters

//   b. Você consegue pensar em um jeito
//    de garantir que apenas `types` válidos sejam utilizados? 

// Com uma condicional que verifica se o type
//

// - **Exercício 3**
    
//     Vamos agora praticar o uso de buscas mais variáveis.
//      Faça agora um endpoint de busca que encontre
//       um usuário buscando ****por **nome**.
    
//     *a. Qual é o tipo de envio de parâmetro que
//      costuma ser utilizado por aqui?*

// Usei o query parameters
    
//     b. Altere este endpoint para que ele devolva uma
//      mensagem de erro caso nenhum usuário tenha sido
//       encontrado.
app.get("/user-name", (req, res) => {
    let codeError: number = 400
    try {
       const name = req.query.name as string;
       const user = users.find((user) => user.name === name)
       if (!user) {
          codeError = 404
          throw new Error("Não encontrado")
       }
       res.status(200).send(user)
    } catch (error: any) {
       if(res.status(codeError).send({ message: error.message })){
          res.status(codeError).send({ message: error.message })
       }else{
          res.status(500).send("Erro no servidor!")
       }
    }
 })

//  Fizemos algumas buscas
//   no nosso conjunto de itens, agora é hora de
//    **adicionar** coisas. Comecemos criando
//     um usuário na nossa lista. Crie um endpoint que use o método `POST` para adicionar um item ao nosso conjunto de usuários.

// a. Mude o método
//  do endpoint para `PUT`. O que mudou?

// Não houve mudança

// b. Você considera o método
//  `PUT` apropriado para esta transação? Por quê?

//Não pois o metodo put é para fazer alterações

app.put("/users", (req, res) => {
    let codeError = 400
    try {
       const {id, name, email, type, age} = req.body
       const newUser = {id, name, email, type, age}
 
       if(typeof id !== "number"){
          codeError = 422
          throw new Error("Parametro Id precisa ser um number")
 
       }else if(typeof name !== "string"){
          codeError = 422
          throw new Error("Parametro Name precisa ser uma string")
 
       }else if(typeof email !== "string"){
          codeError = 422
          throw new Error("Parametro Email precisa ser uma string")
 
       }else if(typeof type !== "string"){
          codeError = 422
          throw new Error("Parametro Type precisa ser uma string")
 
       }else if(typeof age !== "number"){
          codeError = 422
          throw new Error("Parametro Age precisa ser um number")
       }
 
       users.push(newUser)
       res.status(201).send(users)
 
    } catch (error: any) {
       if(res.status(codeError).send({ message: error.message })){
          res.status(codeError).send({ message: error.message })
       }else{
          res.status(500).send("Erro no servidor!")
       }
    }
 })

