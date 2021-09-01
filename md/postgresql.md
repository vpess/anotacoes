# Postgre SQL

- **[Documentação oficial](https://www.postgresql.org/docs/current/)**
- **[Documentação de referência](https://www.postgresqltutorial.com/)**

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
- **DEFAULT LOCALTIMESTAMP(0)**: pega o horário local da máquina. Exemplo: `data_atualizacao timestamp without time zone NOT NULL DEFAULT LOCALTIMESTAMP(0)`

## Comandos

- `CREATE DATABASE nome_banco;` : Criar banco de dados
- `CREATE TABLE nome_tabela;` : cria tabela no banco de dados
- `CREATE TABLE nome_tabela (id);` : cria uma tabela no banco de dados, junto de uma coluna
- `SELECT * FROM nome_tabela`: exibe todas as colunas de uma tabela, com sesus dados. No PgAdmin, essa é a única forma de visualizar graficamente uma tabela
- `DELETE FROM nome_tabela WHERE condicao`: deleta uma linha da tabela
- `DELETE FROM nome_tabela WHERE id between x and y`: deleta todas as linhas que possuem o id entre x e y
- `DELETE FROM nome_tabela WHERE id IN (x, y)`: deleta todas as linhas que possuem o id especificado dentro do parênteses
- `ALTER TABLE table_name ALTER COLUMN column_name TYPE data_type USING new_data_type`: altera o tipo de dado de uma tabela
- `ALTER TABLE table_name ALTER COLUMN column_name TYPE json USING to_jsonb(column_name)::json`: altera o tipo de dado de uma coluna populada para json

## Exemplos de código (scripts)

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
