***
USE `gebru-4211877-jorge-schuck`;
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);


#Exercicio 1
#a) VARCHAR é pra indicar uma string e o que está em parenteses
# é o numero de caracteres, Primary Key, é a chave primaria
# geralmente colocada em dados que são unicos. 
# Date se refere a data de nascimento, no caso not null significa
# que nao pode ser nulo. tem que haver um valor.alter

#b)
SHOW TABLES;
# mostra as tabelas
SHOW databases;
# mostra a base de dados 

# c)
DESCRIBE Actor;
# mostra a tabela e os tipos de dados que podem ser inseridos nela

# Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

# a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

# b)
# O erro ocorreu devido tentativa de colocar uma mesma id 002. Como o id é uma Primary Key, só pode haver um unico dado. 
#e nao pode ser replicado.

#c)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# O erro ocorreu por que nao foram passadas birth_date e gender. Foi Corrigido e funcionou normalmente.

#d)

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Joao",
  400000,
  "1949-04-18", 
  "male"
); 
# Não foi passado nem no parametro nem nos dados, por isso, ocorreu um erro, por que o campo nome não tem um valor default.
# Foi corrigido passando o parametro name, e o dado indicado, mas acredito que poderia ter sido passado um default para name também.  

# e) 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#foi passado Date de forma errada, ele deve ser passado como string "",
# foi corrigido utilizando aspas

#f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

# Exercicio 3

SELECT * from Actor;
SELECT id, salary from Actor ;
SELECT id, name from Actor WHERE gender = "male";
#a)
 SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
 #b) 
 SELECT salary from Actor WHERE name = "Tony Ramos";
 #c) 
 SELECT * from Actor WHERE gender = "invalid";
 # nao retornou nada pois na=ão há nenhum gender invalid
 #d)
 SELECT id, name, salary from Actor WHERE salary <= 500000;
 
 #e) 
 SELECT id, nome from Actor WHERE id = "002";
 SELECT id, name from Actor WHERE id = "002";
 # foi passado name escrito errado "nome", foi corrigido e funcionou. 
 
 # Exercicio 4
 DELETE FROM Actor WHERE id = 006;
 # para poder deletar tive que desativar o SafeUpdate, em Proferences, Sql Editor. não sei se poderia ter feito, porem funcionou
 
 #DESAFIO
 # Exercicio 5
 
 SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; 
 #a)
 # usamos Select para selecionar tudo ou seja todas as colunas, onde (WHERE) o nome é como (Like) "A referente a letra inicial
 # e % referente a uma string generica, OU (or) Nome como(like) "J%", isso em parenteses por ira executar primeiro, e apos 
 #os parenteses, o operador AND( e ) indicando que eu quero saber também o salary, maior que 300000
 
 #b)
 SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000; 
 
 #c)
  SELECT * from Actor WHERE name LIKE "%g%" OR name LIKE "%G%"; 
  
#d)
  SELECT * from Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
  AND salary between 350000 AND 900000; 

#Exercicio 6
CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
titulo VARCHAR(255) NOT NULL unique,
sinopse TEXT NOT NULL,
data_lançamento DATE NOT NULL,
avaliacao INT NOT NULL
);
DROP TABLE Filmes;
#a) 
INSERT INTO Filmes (id, titulo, sinopse, data_lançamento, avaliacao)
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam
 a rotina do casamento. Um dia eles são atingidos por um
 fenômeno inexplicável e trocam de corpos",
 "2006-01-06",
 7
);
SELECT * from Filmes;

INSERT INTO Filmes
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa
 grandes confusões. A vida dela e dos seus quatro filhos sofre
 uma reviravolta depois que Zaida,
 empregada e amiga de Dona Picucha, anuncia que vai
 se casar e não poderá mais morar com ela",
 "2012-12-27",
 10
);

INSERT INTO Filmes
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.",
 "2017-11-02",
 8
);

# Exercicio 7

#a)
SELECT id, titulo, avaliacao from Filmes WHERE id = "002";

#b)
SELECT * from Filmes WHERE titulo = "Se eu fosse você";

#c)
SELECT id, titulo, sinopse from Filmes WHERE avaliacao >= 7;

# Exercicio 8 

#a)
SELECT * from Filmes WHERE titulo LIKE "%flor%";

#b)
SELECT * from Filmes WHERE titulo LIKE "TERMO DE BUSCA" OR sinopse LIKE "TERMO DE BUSCA";

#c)
SELECT * from Filmes WHERE data_lançamento < "2022-06-14";

#d)

SELECT * from Filmes WHERE data_lançamento < "2022-06-14" AND (titulo LIKE "TERMO DE BUSCA"
 OR sinopse LIKE "TERMO DE BUSCA") AND avaliacao >= 7;
 
 SELECT * from Filmes WHERE data_lançamento < CURDATE() AND (titulo LIKE "TERMO DE BUSCA"
 OR sinopse LIKE "TERMO DE BUSCA") AND avaliacao >= 7;
 ***






 
 
 
 
 
 
















