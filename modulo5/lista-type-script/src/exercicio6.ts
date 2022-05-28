
type clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function listaNegativos(): Array<clientes> {
    const lista: Array<clientes> =[
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
    const novaLista = lista.map((negativos)=>{
        let novoSaldo: number = negativos.saldoTotal
        for (let debito of negativos.debitos) {
            novoSaldo = novoSaldo - debito;
        }
        return {...negativos, saldoTotal: novoSaldo, debitos: []}
    })
    const listaNegativos: Array<clientes> = novaLista.filter((cliente) => {
        return cliente.saldoTotal < 0;
    });
    
    return listaNegativos;
    
}
console.log(listaNegativos())