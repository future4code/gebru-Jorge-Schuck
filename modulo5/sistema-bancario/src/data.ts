export enum OPERATION {
    PAYMENT = "Pagamento",
    TRANSFER = "Transferência",
    DEPOSIT = "Depósito"
}

export type Transaction = {
    value: number,
    date: string,
    description: OPERATION
}

export type User = {
    name: string,
    cpf: string,
    birtDate: string,
    balance: number,
    transaction: Transaction[],
}

export const Customers: User[] = [
    {
        name: "Jorge Guilherme",
        cpf: "111.111.111-11",
        birtDate: "20/05/1981",
        balance: 2000,
        transaction: [
            {
                value: 50,
                date: "02/04/2022",
                description: OPERATION.TRANSFER
            },
            {
                value: 100,
                date: "25/01/2021",
                description: OPERATION.PAYMENT
            },
            {
                value: 1000,
                date: "10/08/2021",
                description: OPERATION.DEPOSIT
            },
        ]
    },
    {
        name: "Jõao Antonio",
        cpf: "222.222.222-22",
        birtDate: "08/10/1989",
        balance: 100000,
        transaction: []
    },
    {
        name: "Maria Antonieta",
        cpf: "333.333.333-33",
        birtDate: "04/04/1998",
        balance: 255008,
        transaction: [
            {
                value: 5000,
                date: "19/07/2000",
                description: OPERATION.DEPOSIT
            },
        ]
    },
    {
        name: "Laura Emilia",
        cpf: "444.444.444-44",
        birtDate: "25/10/1970",
        balance: 5000,
        transaction: [
            {
                value: 1350,
                date: "30/01/2022",
                description: OPERATION.DEPOSIT
            },
            {
                value: 200,
                date: "25/04/2022",
                description: OPERATION.PAYMENT
            },
        ]
    },
]