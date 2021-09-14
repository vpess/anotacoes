# Docker

- **[Documentação oficial](https://docs.docker.com/engine/reference/run/)**
- **[DockerHub: repositório de imagens](https://hub.docker.com/)**
- **[Apostila auxiliar](http://files.cod3r.com.br/apostila-docker.pdf)**

## Observações

- Containers não reconhecem endereço DNS. Caso haja a necessidade de subir uma aplicação para um container, as rotas/servidores deverão ser especificadas pelo endereço IP.

- A partir da versão 1.13, [houve uma alteração de sintaxe no Docker](https://blog.docker.com/2017/01/whats-new-in-docker-1-13/#h.yuluxi90h1om), mas os comandos antigos ainda podem ser utilizados (como atalhos). Exemplos abaixo:

    | Sintaxe atual | Atalho |
    | ------------ | ------------ |
    | `docker image pull`  | `docker pull`  |
    | `docker container create`  | `docker create`  |
    | `docker container start`  | `docker start`  |
    | `docker container exec`  | `docker exec`  |

- Comandos do Linux (em grande maioria) funcionam nos containers, pois o container é baseado em Unix.

## Conceitos

- **Imagem**: Equivale à uma classe na programação orientada a objetos.
- **Container**: Equivale à um objeto de uma classe na programação orientada a objetos. Todo container precisa ter nomes únicos.

## Comandos

`systemctl start docker`: inicia os serviços do Docker num ambiente Linux/Unix

`docker run`: inicializa, baixa ou cria um container. Se um mesmo comando for executado mais de uma vez, um novo container será criado (ou seja, o comando run sempre cria um novo container). É a junção de quatro comandos: `docker image pull`, `docker container create`, `docker container start` e `docker container exec`.

`docker container run --rm nome_container`: remove automaticamente um container da lista após o término de sua execução. Comandos previamente executados direcionando o container em questão permanecem no log; apenas o comando executado junto com o rm que é removido

`docker container run -it nome_container`: o parâmetro 'i' significa modo interativo, e o parâmetro 't' significa que o terminal será usado.
**Exemplo**: `docker container run -it debian bash`

`docker container run --name nome_container`: dá um nome para o container que será executado. O comando é útil para a reutilização de containers.
**Exemplo**: `docker container run --name mydeb -it debian bash` (cria um container com o nome 'mydeb', usando a imagem Debian e executando o Bash.)

`docker container run -p 8080:80 nome_imagem`: inicia um container numa porta específica. Os números parametrizados no comando são as portas para acesso ao container. O primeiro é a porta no host, e o segundo é a porta no container. **Exemplo**: `docker container run -p 8080:80 nginx`

`docker container run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html`: aponta a pasta `./html`para a imagem do nginx, para a pasta `/usr/share/nginx/html`, que é a pasta que o nginx lê os arquivos. Para que o conteúdo seja visto no navegador, o endereço que deve ser acessado é: **localhost:8080/arquivo.html**

`docker container run -d nome_container`: executa um container em background. O comando retorna um id,  que é o id do container

`docker container start -ai nome_container`: inicia um container já criado e 'anexa' (attach) ele ao terminal

`docker container restart nome_container`: reinicia um container. Pode ser usado o nome do container ou o id dele

`docker container stop nome_container`: encerra um container. Pode ser usado o nome do container ou o id dele

`docker container ps`: exibe os containers que estão sendo executados

`docker container ps -a`: exibe os containers que foram baixados, independente de estarem sendo executados ou não

`docker container ls`: exibe todos os containers que foram criados

`docker container ls -a`: exibe todos os containers que foram executados, independente do status

`docker volume ls`: exibe todos os volumes que foram criado

`docker container logs nome_container`: exibe todos os logs que foram escritos no console. Muito útil na execução de containers em modo daemon (background)

`docker container inspect nome_container`: exibe um json com diversas especificações do container

`docker container exec nome_container cmd_linux`: executa um comando linux diretamente no container especificado

`docker image rm nome_imagem`: deleta uma imagem docker
