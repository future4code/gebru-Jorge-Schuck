lista-typescript
function imprimeFrase() {
    const nome: string = "Jorge";
    const birthdate: string = "24/04/1993";
    const split = birthdate.split("/");
    console.log(`Olá me chamo ${nome}, nasciiii no dia ${split[0]} do mês de ${split[1]} do ano de ${split[2]}`);
}
imprimeFrase();

// Crie um função que receba uma `string` com o nome e outra
//  `string` com uma data de nascimento (ex.: “24/04/1993”). 
//  A função deve separar o dia, o mês e ano e retornar uma 
//  `string` no seguinte formato: 

// ```tsx
// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
// ```
function imprimeFrase (){
    const nome:string = "Jorge"
    const birthdate:string = "24/04/1993"
    const split = birthdate.split("/")
    console.log(`Olá me chamo ${nome}, nasci no dia ${split[0]} do mês de ${split[1]} do ano de ${split[2]}`)
}
imprimeFrase()

 master
