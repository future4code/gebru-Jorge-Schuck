```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFixo = 2000
let comissao = valorTotalVendas * 0.05
let qtDeCarros = qtdeCarrosVendidos * 100
let res = salarioFixo + qtDeCarros + comissao
return res
}
```