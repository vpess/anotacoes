# Git

- **[Documentação oficial](https://git-scm.com/docs/)**

## Camadas

- *Working directory*: Arquivos modificados (changes not-staged), excluídos ou adicionados (arquivos untracked);
- *Staging area (staged)*: Arquivos preparados para serem versionados (git add);
- *Committed*: Arquivos salvos (git commit).

## Conceitos

- **Issues**: Gerenciamento de bugs, melhorias e etc
- **Milestones**: Flags que servem para definir a versão em que as issues serão atendidas
- **Labels**: Tags para filtrar as issues
- **Star**: Favorita um projeto, e te permite filtrar quais mudanças quer acompanhar no projeto
- **Fork**: Clona um projeto já criado, para que você tenha as permissões necessárias para a edição
- **Pull Request**: Faz um commit "sugestão" para um projeto existente, que você não tenha permissão
- **Branch**: ramificação do projeto que permite que funcionalidades novas sejam desenvolvidas, sem impactar o projeto principal
- **Fast-forward**: Pega os commits de uma branch e aplica diretamente em outra branch, durante o merge
- **Tag**: Destaca um commit entre os demais. Tem utilidade em projetos longos que possuem muitos commits, onde é necessário destacar um em específico (que possua uma versão implementada, uma funcionalidade, etc). No Github, as tags são Releases.
- **Conflicts**: Um conflito sempre será apontado no arquivo conflitado. O conflito será sinalizado com os símbolos >>>>>>>>>>, ============== e <<<<<<<<<<<<. Para efetuar a correção, deve-se editar o arquivo conflitado, escolhendo a alteração que deseja manter. Para isso, apague a alteração que deseja descartar, e também os caracteres/símbolos especiais que sinalizam o conflito. Feito isso, efetue o commit e o push.

## Observações

- Se um arquivo for alterado enquanto estiver na staging area, as alterações não serão migradas para o commit.

- arquivo **.gitignore**: arquivo de configuração que contém quais os arquivos serão ignorados no `git-add` e `git-commit`. Dentro do arquivo, deverá ser digitado o nome dos arquivos que serão ignorados, ou então a extensão e outros parâmtros.

## Comandos

`git config --list` OU `git config --global --list`: exibe lista de configurações feitas no git

`git config --global user.name ""`: define o username do git (necessário especificar entre parênteses)

`git config --global user.email ""`: define o email do git (necessário especiicar entre parênteses)

`git config --global core.editor`: define o editor padrão do git (se nenhum for especificado, será definido o Vim)

`git config --global alias. nome_alias comando_git`: define uma abreviação para um comando do git. **Exemplo**: `git config --global alias. s status` faz com que o comando `git status` seja apenas `git s`

`git remote -v`: exibe as urls correspondentes ao projeto acessado

`git-init` ou `git init`: cria um diretório git na pasta especificada (.git). Todos os arquivos armazenados na pasta oculta .git são as versões dos arquivos

`git status`: exibe o status do diretório git (status dos arquivos)

`git add`: adiciona um arquivo na lista de commit (arquivos a serem commitados)

`git add --all` OU `git add -A` OU `git add .` OU `git add *`: adiciona todos os arquivos do diretório para a lista de commit

`git commit`: cria a versão do arquivo

`git add nome_arquivo && git commit -m "mensagem"`: adiciona um arquivo e insere a mensagem de commit dele

`git commit -a -m "mensagem"`: Adiciona todos os arquivos para a lista de commit (a) e realiza o commit com uma mensagem (m)

`git commit -m "mensagem"`: adiciona uma mensagem no commit. Útil para criar um log de versionamento (ex. git commit -m "funcionalidade x incrementada"

`git commit -am "mensagem"`:  faz um commit com arquivos que já existiram (atualização)

`git log`: exibe um log de alterações

`git log  --decorate`: exibe um log mais detalhado

`git log --author="nome_autor"`: filtra os logs por autor

`git shortlog`: mostra em ordem alfabética quais os autores e quantos (e quais) commits fizeram

`git shortlog -sn`: mostra a quantidade de commits e seus respectivos autores

`git log --graph`: mostra em forma gráfica o que acontece com os branches e versões

`git log --oneline`: mostra commits e suas mensagens de forma organizada

`git show codigo_da_hash`: mostra detalhes de cada commit/hash

`git diff`: mostra alterações feitas no repositório, entre o diretório local e o último commit

`git diff --staged`: mostra alterações feitas no repositório, entre o que está no estágio staged e o último commit

`git diff --name-only`: mostra apenas o nome dos arquivos modificados

`git checkout nome_do_arquivo`: retorna o arquivo para a versão anterior à da edição

`git checkout SHA-1`: entra no repositório git correspondente ao código SHA-1 inserido

`git clean -f`: remove todos os arquivos que foram adicionados no diretório de trabalho (que ainda não possuam uma versão)

`git reset`: anula as alterações do repositório armazenadas em staged

`git reset HEAD nome_do_arquivo`: retorna o arquivo já adicionado para a versão anterior

`git reset --hard`: anula todas as alterações de todos os arquivos do repositório

`git reset --hard HEAD~1`: desfaz o último commit realizado

`git commit --amend`: adiciona uma alteração num commit local já existente

`git reset --hard codigo_da_hash`: vai 'matar' tudo que foi feito no commit

`git reset --soft codigo_da_hash`: retorna um commit para uma versão anterior (deve-se escolher uma hash anterior a desejada)

`git reset --mixed codigo_da_hash`: retorna um commit para uma versão anterior (deve-se escolher uma hash anterior a desejada)

`git clone`: cria uma cópia de um repositório, tanto local quanto em servidor

`git push`: envia as alterações commitadas para o servidor

`git pull`: atualiza as alterações do repositório (caso haja alguma atualização disponível). Também atualiza atualizações de branches. O comando é resultado dos comandos `git fetch` e `git merge`

`git fetch`: traz alterações do servidor para a máquina local (branches, tags, etc), mas não aplica essas alterações

`git branch`: lista as branches do repositório local

`git branch nome_da_branch`: cria uma nova branch

`git branch -d nome_da_branch`: exclui uma branch local. É necessário estar fora da branch que deseja excluir

`git branch -D nome_da_branch`: exclui uma branch local de forma forçada

`git push --delete origin nome_da_branch`: exclui uma branch remota (no servidor)

`git branch -m novo_nome`: renomeia uma branch local, quando se está 'checkado' na branch em que deseja renomear

`git branch -m nome_da_branch novo_nome`: renomeia uma branch local

`git checkout nome_da_branch`: aponta o git para a branch desejada

`git checkout -b nome_da_branch`: cria uma nova branch e aponta o git para a branch criada. Caso queira criar uma branch a partir de um commit antigo, coloque o código do commit na frente do nome da branch.

`git push -u origin nome_da_branch`: atalho para git push --set-upstream, comando responsável para enviar uma branch para o repositório git do servidor

`git merge nome_da_branch`: mescla as branches, utilizando o último commit como referência. Commits feitos antes do último não são 'mergeados'

`git rebase`: mescla a branches, utilizando todos os commits feitos no intervalo de junção

`git tag -a nome_da_tag -m mensagem`: Cria uma tag. Caso queira criar a tag num commit específico, será necessário usar o comando `git checkout codigo-_do_commit` antes do comando `git tag -a`.

`git tag`: lista as tags existentes localmente

`git push origin nome_da_tag`: envia uma tag para o repositório

`git tag -d nome_da_tag`: deleta uma tag local

`git push --delete origin nome_da_tag`: deleta uma tag no servidor

`git stash` OU `git stash save`: guarda alterações de um repositório local num espaço na memória. Útil para casos onde não se queira commitar ou deletar alterações feitas.

`git stash list`: lista as alterações guardadas na memória

`git stash save "mensagem"`: armazena uma mudança em stash com uma mensagem personalizada

`git stash apply`: pega a primeira alteração da lista em stash e aplica ao projeto correspondente

`git stash pop`: faz o mesmo que o git stash apply, mas apaga a alteração após aplicá-la ao projeto

`git stash drop codigo_do_stash`: apaga o stash selecionado
