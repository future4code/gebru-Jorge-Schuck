
import { AddressInfo } from "net";
import cors from "cors"
import {v4 as generatorId} from "uuid"
import { products } from "./data"
import express, { Request, Response } from "express"
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// - Exercício 1
    
//     Crie uma nova API do zero (ou utilizando um template)
//      e desenvolva um endpoint de teste com método `**GET`** no path **`“/test”`** que
//       retorna uma mensagem genérica avisando que a API está funcional.

app.get("/test", (req, res) => {
    res.send("Está vivo!!!")
  })

//   - Exercício 2
    
//     Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. Cada produto
//      será representado por um objeto com propriedades: id (`string`),
//       name (`string`) e price (`number`). Popule manualmente
//        o array com pelo menos 3 produtos.

// arquivo data feito

// - Exercício 3
    
//     Desenvolva um endpoint que **cria um novo produto** e
//      retorna a lista de produtos atualizada. A id do
//       produto deve ser gerada automaticamente pela API.

app.post("/addProduct", (req, res) => {
    const newProduct: any = {
      id: generatorId(),
      name: req.body.name,
      price: req.body.price
    };
  
    try {
      if (!newProduct.name) {
        throw new Error ("Insira o nome do produto") 
      } else if (!newProduct.price) {
        throw new Error("Insira o preço do produto")
      } else if (!req.headers.authorization) {
        throw new Error("Sua autorização está errada")
      }
  
      if (newProduct.price <= 0) {
        throw new Error("O preço deve ser maior que zero")
      }
  
    } catch (error: any) {
      switch(error.message) {
        case "Insira o nome do produto":
          res.status(422).send(error.message)
          break
        case "Insira o preço do produto":
          res.status(422).send(error.message)
          break
        case "Sua autorização está errada":
          res.status(422).send(error.message)
          break
        default:
          res.status(500).send(error.message)
          break
      }
    }
  
    products.push(newProduct)
    res.send(products)
  })

//   - Exercício 4
    
//     Crie um endpoint que **retorna todos os produtos**.


  app.get("/getAllProducts", (req: Request, res: Response) => {
    try {
      res.send(products)
  
    } catch (error: any) {
      res.send(error.message || "Erro inesperado")
    }
  })

//   - Exercício 5
    
//     Crie um endpoint que **edita** **o preço de** 
//     **um determinado produto** e retorna a lista de produtos atualizada.


// - Exercício 6
    
//     Construa um endpoint que **deleta um determinado produto**
//      e retorna a lista de produtos atualizada.

app.delete("/deleteProduct/:productId", (req, res) => {
    const productId = req.params.productId
    try {
      let finded = false
      
      for (let i = 0; i < products.length; i++) {
        if(products[i].id === Number(productId)) {
          products.splice(i, 1)
          finded = true
        }
      }
  
      if (!finded) {
        throw new Error ("Produto nao encontrado")
      } else if(!req.headers.authorization) {
        throw new Error ("Voce esqueceu a autorização")
      }
  
      res.send (products)
  
    } catch (error: any) {
      switch(error.message) {
        case "Produto nao encontrado":
          res.status(422).send(error.message)
          break
        case "Voce esqueceu a autorização":
          res.status(422).send(error.message)
          break
        default:
          res.status(500).send(error.message)
          break
      }
    }
  })