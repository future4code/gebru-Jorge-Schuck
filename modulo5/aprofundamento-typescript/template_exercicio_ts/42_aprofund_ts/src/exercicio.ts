// exercicio 1
//a) Crie uma variável minhaString do tipo string e atribua 
//um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString:string = 22
// o vsCode sinaliza sublinhando a variavel e ao colocarmos o mouse é dita uma mensagem 
// de que o type number não é aceitavel aqui.

//b) Crie uma variável meuNumero do tipo number e atribua um valor
 //numérico. Como fazer para que essa variável também aceite strings?
 //Ou seja, como criamos no typescript uma variável que aceite mais
 //de um tipo de valor?

// const meuNumero: number | string = "oi"
// Precisamos usar o Union Type em que consiste usar um operador lógico "OU"

//c)Agora crie um novo objeto. Este objeto é uma pessoa,
// e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas
//  os campos definidos acima. Crie um **tipo** `Pessoa` para garantir 
//  que todos os objetos tenham os mesmos campos.

// type Person = {
//     nome: string,
//     idade: number,
//     corFavorita: string

// }

// const pessoa1: Person = {
//     nome: "jorge",
//     idade: 40,
//     corFavorita: "vermelho"
// }
// const pessoa2: Person = {
//     nome: "Zaca",
//     idade: 43,
//     corFavorita: "roxo"
// }
// const pessoa3: Person = {
//     nome: "Daniela",
//     idade: 20,
//     corFavorita: "rosa"
// }
// const pessoa4: Person = {
//     nome: "Pedro",
//     idade: 22,
//     corFavorita: "Azul"
// }

//d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre
// as cores do arco-íris. Utilize um enum para isso.

// type Person = {
//     nome: string,
//     idade: number,
//     corFavorita: string

// }
//         enum CorFavorita {
//             Vermelho = "Vermelho",
//             Laranja = "Laranja",
//             Amarelo = "Amarelo",
//             Verde = "Verde",
//             Azul = "Azul",
//             Anil = "Anil",
//             Violeta = "Violeta"
//         }
// const pessoa1: Person = {
//     nome: "jorge",
//     idade: 40,
//     corFavorita: CorFavorita.Vermelho
// }
// const pessoa2: Person = {
//     nome: "Zaca",
//     idade: 43,
//     corFavorita: CorFavorita.Amarelo
// }
// const pessoa3: Person = {
//     nome: "Daniela",
//     idade: 20,
//     corFavorita: CorFavorita.Anil
// }
// const pessoa4: Person = {
//     nome: "Pedro",
//     idade: 22,
//     corFavorita: CorFavorita.Verde
// }






// exercicio 2
//Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros: Array<number>) {

//     const numerosOrdenados: Array<number> = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//a)Quais são as entradas e saídas dessa função? Copie a função para
// um arquivo .ts e faça a tipagem desses parâmetros
// As entradas são o Array numeros, e a saída as estatisticas

//b) Quais outras variáveis compõem
// essa função? Explicite a tipagem de todas elas 
// As variáveis são numeros que é um Array, numerosOrdenados que é outro array de numeros
//e soma.

//c) 
// type Estatisticas = {
//     maior: number,
//     menor: number,
//     media: number
// }
// type amostraDeIdades = {

//     numeros: Array<number>,

//     obterEstatisticas: (numeros: Array<number>) => Estatisticas
// }

// Exercício 3

// Considere que você esteja implementando uma rede 
// social composta por posts de usuários. Cada um dos posts
//  possui: um autor e um texto.

// Observe o seguinte array de posts:

//a)
// type person = {
//     autor: string,
//     texto: string
// }

// const posts: person[] = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

// //b)Observe abaixo a função 
// //buscarPostsPorAutor(), escrita em JavasScript:

// //As entradas são, post e saída é autorInformado


// function buscarPostsPorAutor(posts: person[], autorInformado: string) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//Exercício 4

//a) Crie um arquivo chamado exercicio-4.ts ,
// cole o código abaixo e use comentários para responder as questões.
// FEITO NO ARQUIVO exercicio-4.ts

//Exercicio 5 


