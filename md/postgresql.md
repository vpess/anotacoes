---
title: 'Postgre SQL'
title_note: '🐘 Postgre SQL'
date: '15/09/21'
update: '30/06/22'
excerpt: 'Informações e comandos sobre o Postgre SQL.'
cover_image: '/images/postgresql-icon.png'
---

- **[Documentação oficial](https://www.postgresql.org/docs/current/)**
- **[Documentação de referência](https://www.postgresqltutorial.com/)**
- **[Manipulação de dados em json (documentação oficial)](https://www.postgresql.org/docs/9.3/functions-json.html)**

## Tipos de dado

- **PRIMARY KEY**: Chave primária
- **REFERENCES**: Chave estrangeira
- **SERIAL**: dado do tipo inteiro e que se autoincrementa (equivale ao AUTO_INCREMENT no MySQL)
- **CHARACTER VARYING** ou **VARCHAR**: caracteres variados
- **text**: texto sem limite de caracteres
- **json**: formato json
- **jsonb**: formato json, porém melhor (o b no fim se refere a _better_).
- **MONEY**: usado para fins monetários
- **DATE**: usado para datas
- **DEFAULT LOCALTIMESTAMP(0)**: pega o horário local da máquina e define ele como padrão. Isto faz com que ele seja inserido automaticamente na coluna correspondente do banco, mesmo sem especificá-lo como um valor. Exemplo: `data_atualizacao timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP(0)`

## Comandos e exemplos de queries

- `CREATE DATABASE nome_banco;` : Criar banco de dados
- `CREATE TABLE nome_tabela;` : cria tabela no banco de dados
- `CREATE TABLE nome_tabela (id);` : cria uma tabela no banco de dados, junto de uma coluna
- `SELECT * FROM nome_tabela`: exibe todas as colunas de uma tabela, com sesus dados. No PgAdmin, essa é a única forma de visualizar graficamente uma tabela
- `DELETE FROM nome_tabela WHERE condicao`: deleta uma linha da tabela
- `DELETE FROM nome_tabela WHERE id between x and y`: deleta todas as linhas que possuem o id entre x e y
- `DELETE FROM nome_tabela WHERE id IN (x, y)`: deleta todas as linhas que possuem o id especificado dentro do parênteses
- `ALTER TABLE table_name ALTER COLUMN column_name TYPE data_type USING new_data_type`: altera o tipo de dado de uma tabela
- `ALTER TABLE table_name ALTER COLUMN column_name TYPE json USING to_jsonb(column_name)::json`: altera o tipo de dado de uma coluna populada para json
- `SELECT * FROM nome_tabela WHERE campo_json> 'cor' = 'azul'`: seleciona todas as ocorrências da tabela onde o valor do objeto **cor** seja igual a **azul**.

## Exemplos de código (scripts)

- Exibe todas as conexões ativas no banco de dados Postgre

```sql
SELECT * from pg_stat_activity
```

- Criação da tabela **secao03**, com uma coluna **id** como chave primária e uma coluna **descricao** com limite de 50 caracteres variados e que não pode ser nula.

```sql
CREATE DATABASE secao03;
CREATE TABLE tipos_produto (
    id SERIAL PRIMARY KEY, --INT AUTO_INCREMENT
    descricao CHARACTER VARYING(50) NOT NULL);
```

- Criação da tabela **produtos**, com uma coluna **id** como chave primária, uma coluna **descrição** com limite de 50 caracteres variados e que não pode ser nula, uma coluna **preco** do tipo _MONEY_ que não pode ser nula, e uma coluna **codigo_tipo** que usa o **id** da tabela **tipos_produto** como chave estrangeira, que não pode ser nula.

```sql
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao CHARACTER VARYING(50) NOT NULL,
    preco MONEY NOT NULL,
    codigo_tipo INT REFERENCES tipos_produto(id) NOT NULL);
```

- Criação da tabela **filmes** dentro do schema **locadora**, com a coluna **id** sendo a primary key, a coluna **nome** com limite de 250 caracteres variados, a coluna **ano** com caractere numérico e a coluna **data_cadastro** que insere automaticamente a data em que o filme foi inserido (ou atualizado) na tabela.

```sql
CREATE TABLE locadora.filmes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    ano NUMERIC NOT NULL,
    data_cadastro TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT LOCALTIMESTAMP(0)
)
```

- Inclusão de uma nova coluna, chamada **diretor**, na tabela **filmes**, presente no schema **locadora**.

```sql
ALTER TABLE locadora.filmes (
    ADD COLUMN diretor VARCHAR(200) NOT NULL
)
```

- Exemplo de inserção de dado na tabela **filmes**, presente no schema **locadora**.

```sql
INSERT INTO 
    locadora.filmes (nome, ano, diretor)
VALUES
    ('Heat', '1995', 'Michael Mann')
```

- Exemplo de inserção múltipla de dados na tabela **filmes**, presente no schema **locadora**.

```sql
INSERT INTO 
    locadora.filmes (nome, ano, diretor)
VALUES
    ('The Big Lebowski', '1998', 'Cohen Brothers'),
    ('Pulp Fiction', '1994', 'Quentin Tarantino'),
    ('Black Dynamite', '2009', 'Scott Sanders');
```
