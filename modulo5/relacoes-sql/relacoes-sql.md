***
# EXERCICIO 1

#a) 
# A Chave Estrangeira é uma chave que vem de fora da tabela. Ela é a chave primaria de outra tabela.

#b)

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
INSERT INTO Rating VALUES ('1', 'Excelente', '10', '003');
INSERT INTO Rating VALUES ('2', 'Bom', '8', '002');
INSERT INTO Rating VALUES ('3', 'Ruin', '5', '001');


SELECT * from Rating;
SELECT * from Filmes;
SELECT * from Actor;
SELECT * from MovieCast;

#c)
INSERT INTO Rating VALUES ('4', 'Ruin', '5', '004');
# Não foi possível , houve uma restrição de chave estrangeira

#d)
ALTER TABLE Filmes DROP COLUMN avaliacao;

#e)
DELETE FROM Filmes WHERE id = "003";
# Não foi possivel pois a tabela Filmes tem ligação com a tabela Rating

# EXERCICIO 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

#a) Essa tabela é a junção de duas outras tabelas, a Actor, e a Filmes. 

#b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
		"001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
		"002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
		"004"
);
SELECT * from Rating;
SELECT * from Filmes;
SELECT * from Actor;
SELECT * from MovieCast;

#d)

DELETE FROM Actor WHERE id = "004";
# Não foi possivel pois o ator tem ligação com a tabela MovieCast

# EXERCICIO 3

SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

#a)
# Retorna todos os dados da tabela Filmes unindo a tabela Rating, e o ON serve para referenciar os dados de uma tabela com a de outra.alter

#b)
SELECT m.id as filme, r.rate as avaliacao FROM Filmes m
INNER JOIN Rating r ON m.id = r.movie_id;
***