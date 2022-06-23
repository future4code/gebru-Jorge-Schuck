import express, { Request, Response } from "express"
import cors from "cors"
import connection from "./connection"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const createNewActor = async (id: string, name: string, salary: number, birthDate: Date, gender: string): Promise<void> => {
    await connection("Actor")
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: birthDate,
            gender: gender,
        })
}

//EXERCÍCIO 1
//a) O raw devolve como resposta o que o banco MySQL devolveu.


//b)

const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `);
    return result
}

//c)

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count
    return count
}

//EXERCÍCIO 2
//A)
const updateSalaryActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
}

//B) 
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
}

//C) 
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average
}

//EXERCÍCIO 3
//A) 
app.get("/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {
        const actorById = await connection("Actor")
            .where({ id: req.params.id });

        res.status(200).send(actorById)

    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

//B) 
app.get("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const countGender = await connection("Actor")
            .count()
            .where({ gender: req.query.gender });

        res.status(200).send({ quantity: countGender })

    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

// EXERCICIO 4


app.post("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        await createNewActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.birthDate),
            req.body.salary
        );

        res.status(200).send("Actor created successfully!!")

    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

//A) 
app.put("/actor", async (req: Request, res: Response): Promise<any> => {
    try {
        const { salary, id } = req.body

        await connection(id, salary);

        res.status(200).send({ message: "Salary updated successfully!", });

    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

//B)
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actor")
            .where({ id: req.params.id })
            .delete()

        res.status(200).send("Actor successfully deleted!")

    } catch (e: any) {
        res.status(500).send(e.sqlMessage || e.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`);
    }
});