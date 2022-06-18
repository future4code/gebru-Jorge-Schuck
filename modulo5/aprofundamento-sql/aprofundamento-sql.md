***
# EXERCICIOS APROFUNDAMENTO-SQL

# EXERCICIO 1
DESCRIBE Actor;
SELECT * from Actor;
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
# a)
# Esse comando apaga a coluna Salary

#b)
# Esse comando edita, modifica algum campo

#c)
ALTER TABLE Actor MODIFY gender VARCHAR(100);

# EXERCICIO 2

#a)
UPDATE Actor SET name = "Maria Zilda", birth_date = "1953-10-20" WHERE id = "003";

#b) 
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
### UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes"; Daria pra fazer assim também

#c)
UPDATE Actor SET name = "Osmar Prado", salary = "550000", birth_date = "1947-08-18", gender = "male" WHERE id = "005";

#d)
UPDATE Actor SET name = "Antonio Caloni" WHERE id = "030";
# Não ocorreu nada, embora tenha ficado ícone verde, não houve modificações

# EXERCICIO 3

#a)
DELETE FROM Actor WHERE name = "Maria Zilda";

#b) 
DELETE FROM Actor WHERE gender = "male" AND salary > "500000";

# EXERCICIO 4

#a)
SELECT MAX(salary) FROM Actor;

#b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

#c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

#d)
SELECT SUM(salary) FROM Actor;

# EXERCICIO 5

#a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
# A Query conta o numero de atores por gender, e agrupa eles em ordem de gender.

# b)
SELECT id, name FROM Actor ORDER BY name DESC;

#c)
SELECT * FROM Actor ORDER BY salary;

#d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

#e) 
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

# EXERCICIO 6
SELECT * from Filmes;


#a)
ALTER TABLE Filmes ADD playing_limit_date DATE;

#b)
*** 