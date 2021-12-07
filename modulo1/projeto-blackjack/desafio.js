/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const mensagemConfirm = confirm("Bem Vindo(a) ao Jogo de Blackjack!\nQuer iniciar uma nova rodada?")
    if (mensagemConfirm){
    carta = comprarCarta()
    let carta1usuario = carta.texto
    let valorCarta1usuario = carta.valor
    carta = comprarCarta()
    let carta2usuario = carta.texto
    let valorCarta2usuario = carta.valor
    carta = comprarCarta()
    let carta3usuario = carta.texto
    let valorCarta3usuario = carta.valor


    let somar = valorCarta1usuario + valorCarta2usuario + valorCarta3usuario

    carta = comprarCarta()
    let carta1pc = carta.texto
    let valorCarta1pc = carta.valor
    
    carta = comprarCarta()
    let carta2pc = carta.texto
    let valorCarta2pc = carta.valor

    carta = comprarCarta()
    let carta3pc = carta.texto
    let valorCarta3pc = carta.valor

    confirm(`Suas cartas são ${carta1usuario}, ${carta2usuario},. A Carta revelada do computador é ${carta1pc}.\n Deseja comprar mais uma carta?`)

    confirm(`Suas cartas são ${carta1usuario}, ${carta2usuario}, ${carta3usuario}. A Carta revelada do computador é ${carta2pc}.\n Deseja comprar mais uma carta?`)
   
    let somar1 = valorCarta1pc + valorCarta2pc 
      
    console.log("Usuário - cartas:", carta1usuario, carta2usuario, carta3usuario, "-", somar)
    console.log("Computador - cartas:", carta1pc, carta2pc, carta3pc, "-", somar1)
    if (somar > somar1){
    alert("O usuário ganhou!")
    console.log("O usuário ganhou!")}
    else if (somar < somar1){
       alert("O computador ganhou!")
       console.log("O computador ganhou!")
    }else (alert("Empate!"), console.log("Empate!"))
    
    } else {
   alert("O jogo acabou!")}

    
 
   // if (somar === 21){
   //    alert("O usuário ganhou!")}
   //    else if (somar1 === 21){
   //       alert("O computador ganhou!")
   //    } else if(somar === somar1){
   //       alert("Empate!")
   //    }