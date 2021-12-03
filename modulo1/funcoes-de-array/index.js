//Exercícios de interpretação de código

//1. sera impresso um novo array com  item, do array, no caso os objetos,
// o index de cada elemento, e o proprio array.

//2.
// Será impressso um novo array agora apenas com o .nome de cada objeto

//3.
// Será impresso apenas os itens que nao contenham o nome Chijo. Apenas os 
// itens 0, e 1.  { nome: "Amanda Rangel", apelido: "Mandi" },
                //{ nome: "Laís Petra", apelido: "Laura" },

//Exercícios de escrita de código

//1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a)Crie um novo array que contenha apenas o nome dos doguinhos

//   const novoArray = pets.map((item, index, array) => {
//      return item.nome
//  })
//  console.log(novoArray)

//b)Crie um novo array apenas com os cachorros salsicha

// const novoArray1 = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(novoArray1)

//c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//  A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const novoArray = pets.filter((item) => {
//     if (item.raca === "Poodle")
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
// }) 


//2
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// a) Crie um novo array que contenha apenas o nome de cada item

// const novoArray = produtos.map((Item)=>{
//     return Item.nome

// })
// console.log(novoArray)

//b)Crie um novo array que contenha um objeto com o 
// nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const array2 = produtos.map ((item) => {
//     return {Nome: item.nome, Preço: (item.preco * 0.95).toFixed(2)}
  
// })
// console.log(array2)

//c)Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const novoArray = produtos.filter ((item)=>{
//     return item.categoria === "Bebidas"
// })
// console.log(novoArray)

// //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const novoArray = produtos.filter ((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(novoArray)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const novoArray1 = produtos.filter ((item)=>{
//     return item.nome.includes("Ypê")
// })


// const novoArray = novoArray1.map((item)=>{
//     return `Compre ${item.nome} por ${item.preco}`
// })
// console.log(novoArray)


//DESAFIO:

//1.
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// //  //a) Crie um novo array que contenha apenas o nome
// // //   dos pokémons em ordem alfabética

// // const novoArray = pokemons.map((item)=>{
// //     return item.nome
// // })
// // console.log(novoArray.sort())

// //b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**

// const novoArray = pokemons.map((item)=>{
//         return item.tipo
// })
// const semRepetir = new Set(novoArray)
//     console.log(semRepetir)