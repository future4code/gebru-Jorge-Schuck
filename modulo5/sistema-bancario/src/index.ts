import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { OPERATION, Customers, Transaction, User } from './data'


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

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

//PEGAR USUÁRIOS
app.get('/customers', (req: Request, res: Response) => {
  let errorCode: number = 400

  try {
      res.status(200).send(Customers)
  }

  catch (error: any) {
      if (res.status(errorCode).send({ message: error.message })) {
          res.status(errorCode).send({ message: error.message })
      } else {
          res.status(500).send("Houve um erro no servidor!")
      }
  }
})

//PEGAR SALDO DE USUÁRIO POR NOME E CPF
app.get('/customers/balance/:name/:cpf', (req: Request, res: Response) => {
  let errorCode: number = 400

  try {
      let name = req.params.name
      let cpf = req.params.cpf

      let filterBalanceUser = Customers.find(user => user.cpf === cpf && user.name === name)
      if (filterBalanceUser === undefined) {
          errorCode = 404
          throw new Error("Usuário nao encontrado.")
      } else {
          let balance = filterBalanceUser.balance
          res.send(`Seu saldo é de R$ ${balance},00.`)
      }
  }
  catch (error: any) {
      if (res.status(errorCode).send({ message: error.message })) {
          res.status(errorCode).send({ message: error.message })
      } else {
          res.status(500).send("Houve um erro no servidor!")
      }
  }
})

//CRIAR CONTA
app.post('/customers', (req: Request, res: Response) => {
  let errorCode: number = 400

  try {
      const { name, cpf, birtDate, balance, transaction } = req.body
      const newBirtDate: string[] = birtDate.split('/')

      const newUser: User = { name, cpf, birtDate, balance, transaction }

      if (currentYear - Number(newBirtDate[2]) < 18) {
          errorCode = 422
          throw new Error("A idade deve ser 18 anos de idade ou mais!")
      }
      if (newUser.balance !== 0) {
          errorCode = 422
          throw new Error("O saldo inicial deve ser 0!")
      }
      for (let i = 0; i < Customers.length; i++) {
          if (Customers[i].cpf === req.body.cpf) {
              errorCode = 422
              throw new Error("Já existe uma conta vinculada ao CPF informado!")
          }
      }

      Customers.push(newUser)
      res.status(200).send(Customers)
  }
  catch (error: any) {
      if (res.status(errorCode).send({ message: error.message })) {
          res.status(errorCode).send({ message: error.message })
      } else {
          res.status(500).send("Houve um erro no servidor!")
      }
  }
})
