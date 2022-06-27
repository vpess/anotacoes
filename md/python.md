---
title: 'Python'
title_note: '🐍 Python'
date: '19/06/22'
update: '19/06/22'
excerpt: 'Anotações gerais sobre o Python.'
cover_image: '/images/python-icon.png'
---


- **[Documentação oficial (por versão)](https://www.python.org/doc/versions/)**
- **[Padrões de design e estilo em python](https://www.monolitonimbus.com.br/padroes-de-design-e-estilo-em-python/)**
- **[Padrões de Projeto em Python](https://github.com/kelvins/design-patterns-python)**
- **[10 dicas/falhas que programadores em Python cometem (EN)](https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make)**

## Criação de classes e objetos

Criação da classe *Pessoa*, com os atributos *nome* e *idade*:

```py
class Pessoa:
    def __init__(self, nome, sobrenome, idade):
        self.nome = nome
        self.sobrenome = sobrenome
        self.idade = idade

    def escrever_nome(self):
        print(self.nome, self.sobrenome)

    primeira_pessoa = Pessoa('Vinicius', 'Pessanha', '24')
    primeira_pessoa.escrever_nome()
    print (primeira_pessoa.idade) # irá printar '24'
```

Todas as classes, por padrão, possuem a função `__init__()`. Esta função é chamada automaticamente sempre que uma classe é usada para criar um novo objeto.

O parâmetro `self` é usado para acessar variáveis que pertencem à classe.

## Herança

[Referência](https://www.w3schools.com/python/python_inheritance.asp)

Criação da classe *Estudante*, que herda a classe *Pessoa* mencionada no exemplo anterior:

```py
class Estudante(Pessoa):
    pass

primeiro_estudante = Estudante('Vinicius', 'Pessanha', '24')
primeiro_estudante.escrever_nome()
```

Ao criar uma classe que precise herdar a funcionalidade de outra classe, devemos mencionar a classe Pai entre parênteses durante a criação da nova classe. No exemplo acima, a classe *Estudante* também poderá utilizar o método `escrever_nome()`.

Em alguns casos, além de herdar os atributos e métodos de uma classe, pode haver a necessidade de criar novos atributos. Desse modo, devemos fazer uma referência ao `__init__()` da classe que está sendo herdada. Caso essa referência não seja feita e um novo `__init__()` seja criado, este novo  `__init__()` irá sobrepor o `__init__()` herdado. Veja o exemplo abaixo:

```py
class Estudante(Pessoa):
    def __init__(self, nome, sobrenome, idade): # Função da classe Estudante
        Pessoa.__init__(self, nome, sobrenome, idade) # Função da classe Pessoa
```

Caso seja necessário herdar não só as funcionalidades/métodos, mas também os atributos da classe, deverá ser usada a função `super()`, conforme o exemplo abaixo:

```py
class Estudante(Pessoa):
    def __init__(self, nome, sobrenome, idade):
        super().__init__(self, nome, sobrenome, idade)
```

Usando o mesmo exemplo acima, podemos adicionar novas propriedades e métodos da seguinte forma:

```py
class Estudante(Pessoa):
    def __init__(self, nome, sobrenome, idade, ano_formatura):
        super().__init__(self, nome, sobrenome, idade)
        self.ano_formatura = ano_formatura

    def boas_vindas(self):
        print(f"Bem-vindo {self.nome} {self.sobrenome}, formando de {ano_formatura}.")
```

## Tratamento de erros com try-except

Algumas instruções podem ser encontradas [neste link](https://www.w3schools.com/python/python_try_except.asp).

- Tratar apenas um erro

    ```py
    try:
        var1 = class.name
    except Exception as error:
        print(f'Erro ocorrido: {error}')
    ```

- Tratar mais de um tipo de erro na mesma exceção

    ```py
    try:
        var1 = class.name
    except (ValueError, IndexError) as error:
        print(f'Erro ocorrido: {error}')
    ```

- Para conseguir uma mensagem de erro mais detalhada (como mostrado nas IDEs), deve-se utilizar a biblioteca nativa `traceback`:

    ```py
    import traceback

    try:
        var2 = int(class.name)
    except (Exception,):
        print(f'Erro apresentado: \n{traceback.format_exc()}')
    ```

- Para interromper a execução de um código caso determinado erro ocorra, deverá se usar a palavra `raise`:

    ```py
        try:
            var2 = int(class.name)
            if var2 is None:
                raise Exception(f'Erro apresentado: \n{traceback.format_exc()}')
    ```
