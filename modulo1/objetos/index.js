//EXERCICIOS DE INTERPRETAÇÃO
//1.

//- Matheus Nachtergaele.
//- Acessando o array em elenco, e o ultimo elemento do array Virginia Cavendish.
//- Acessando a propriedade transmissoesHoje imprimirá
//o objeto presente no elemento 2, {canal: "Globo", horario: "14h"}

//2.
//a) no primeiro console.log sera impresso o objeto todo
     //nome: "Juca", idade: 3, raca: SRD
     // no segundo console sera impresso o nome trocado para Juba
     //no terceiro console o mesmo nome, agora trocado a letra a por o, Jubo

//b)
//faz um Spread, ou seja ele copia tudo que existe naquele objeto, e com isso é possivel 
// adicionar algum item ou criar em uma copia do objeto original
// sem mexer no original.

//3.
//a) e b)
//sera impresso false pois está acessando a propriedade
//backender, dentro do objeto pessoa.
// E o segundo console nao acessará nada pois nao existe 
// a propriedade altura, no objeto pessoa. undefined

//EXERCICIOS DE ESCRITA DE CÓDIGO

//1.

// function frase(pessoa){
//     const frase1 = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}.`
//     return frase1

// const pessoa = {
//     nome: "José",
//     apelidos:["Zé", "Zézinho", "Tripa Seca"]   
//     }
//     console.log(frase(pessoa))

// //b


// function frase(novaPessoa){
//     const frase2 = `Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}.`
//     return frase2
// }

//     const novaPessoa = {
//         ...pessoa,
//         apelidos: ["Zé Ruela", "Zeca", "Titu"]


//     }
//     console.log(frase(novaPessoa))

// 2.

// function pessoa1(hanSolo){
//      const array = [hanSolo.nome, hanSolo.nome.length, hanSolo.idade, hanSolo.profissao, hanSolo.profissao.length]
// return array
// }

// const hanSolo = {
//      nome: "Han Solo",
//      idade: 35,
//      profissao: "Contrabandista"

// }
// console.log(pessoa1(hanSolo))

// function pessoa2(lukeSkywalker){
//      const array2 = [lukeSkywalker.nome, lukeSkywalker.nome.length, lukeSkywalker.idade, lukeSkywalker.profissao, lukeSkywalker.profissao.length]
// return array2

// }

// const lukeSkywalker = {
//      nome: "Luke José Skywalker",
//      idade: 18,
//      profissao: "Jedi"
// }

// console.log(pessoa2(lukeSkywalker))

//3.

//a)
// let carrinho = []
// //b)

// const banana = {
//      nome: "Banana",
//      disponibilidade: true
// }

// const abacate = {
//      nome: "Abacate",
//      disponibilidade: true
// }

// const uva = {
//      nome: "Uva",
//      disponibilidade: true
// }
// function selecionar(banana, abacate, uva){
//      return carrinho.push(banana.nome, abacate.nome, uva.nome)
// }
// console.log(selecionar(banana, abacate, uva))
// //d)
// console.log(carrinho)

//DESAFIO:
//1.

// function perguntas(){
//      let nome = prompt("Qual o seu Nome?")
//      let idade = Number(prompt("Qual sua idade?"))
//      let profissao = prompt("Qual sua Profissão")
//      return respostas = {
//           nome: nome,
//           idade: idade,
//           profissao: profissao
//      }

     
// }
// perguntas()
// console.log(respostas)
// console.log(typeof respostas)

//2.
// const dadosDosfilmes = () =>{
//      filme = {
//           Lançamento: 1990,
//           Nome: "Esqueçeram de mim"
//      }
//      filme1 = {
//           Lançamento: 1993,
//           Nome: "Jurassic Park"
//      }
//      const comparacao = filme.Lançamento >=filme1.Lançamento
     

//      return comparacao
// }
// dadosDosfilmes()
// console.log("O primeiro filme foi lançado antes do segundo?", comparacao)
// console.log("O primeiro filme foi lançado no mesmo ano do segundo?")

//precisei entregar do jeito que está pois minha mulher precisou usar o pc
// pra trabalho urgente de faculdade e meu filho ta me cobrando atenção
// perdoem-me!