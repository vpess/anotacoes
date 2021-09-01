# Docker

- **[Documentação oficial](https://docs.docker.com/engine/reference/run/)**
- **[DockerHub: repositório de imagens](https://hub.docker.com/)**

## Conceitos

- **Imagem**: Equivale à uma classe na programação orientada a objetos.
- **Container**: Equivale à um objeto de uma classe na programação orientada a objetos. Todo container precisa ter um nome único

## Comandos

`docker run`: inicializa, baixa ou cria um container. Se um mesmo comando for executado mais de uma vez, um novo container será criado

`docker container ps`: exibe os containers que estão sendo executados

`docker container ps -a`: exibe os containers que foram baixados, independente de estarem sendo executados ou não

`docker container run --rm nome_do_container`: remove automaticamente um container da lista após o término de sua execução. Comandos previamente executados direcionando o container em questão permanecem no log; apenas o comando executado junto com o rm que é removido

`docker container run -it nome_do_container`: o parâmetro 'i' significa modo interativo, e o parâmetro 't' significa que o terminal será usado.
**Exemplo**: `docker container run -it debian bash`

`docker container run --name nome_do_container`: dá um nome para o container que será executado. O comando é útil para a reutilização de containers.
**Exemplo**: `docker container run --name mydeb -it debian bash`
