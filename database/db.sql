-- criando o banco de dados
CREATE DATABASE exercicio;

-- setando o banco para uso
use exercicio;

-- criando a tabela movement
CREATE TABLE movement (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  date_movement date NOT NULL,
  type VARCHAR(10) NOT NULL,
  id_category INT(6) NOT NULL,
  id_account INT(6) NOT NULL
);

-- criando a tabela account
CREATE TABLE account (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  balance DECIMAL(65) NOT NULL
);

-- criando a tabela category
CREATE TABLE category (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(10) NOT NULL
);
