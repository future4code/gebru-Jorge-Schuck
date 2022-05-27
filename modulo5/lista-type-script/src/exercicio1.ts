function imprimeFrase() {
    const nome: string = "Jorge";
    const birthdate: string = "24/04/1993";
    const split = birthdate.split("/");
    console.log(`Olá me chamo ${nome}, nasciiii no dia ${split[0]} do mês de ${split[1]} do ano de ${split[2]}`);
}
imprimeFrase();