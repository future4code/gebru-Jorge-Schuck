enum setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type funcionario = {
    nome: string,
    salario: number,
    setor: setor,
    presencial: boolean
}

function funcionariosMarketing(): Array<funcionario>{
 const lista: Array<funcionario> = [
	{ nome: "Marcos", salario: 2500, setor: setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setor.MARKETING, presencial: true }
]
const listaMarketing = lista.filter((colaborador)=>{
    return  colaborador.setor === "marketing"
})
return listaMarketing
}
console.log(funcionariosMarketing())

