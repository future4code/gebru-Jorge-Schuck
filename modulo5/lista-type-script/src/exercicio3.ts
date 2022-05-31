enum GENERO {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type info = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

function filme(nome:string, anoLancamento:number, genero:GENERO, pontuacao?: number) {
    if (pontuacao){
        const filme : info = {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
        return filme;
    }else{
        const filme : info = {
            nome: nome,
            anoLancamento: anoLancamento,
            genero: genero
        }
        return filme;
    }
}
console.log(filme("Exterminador do Futuro", 1984, GENERO.ACAO, 80))