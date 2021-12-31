---
title: 'Vim'
title_note: '🇻 Vim'
date: '04/10/21'
update: '04/10/21'
excerpt: 'Keybindings e comandos do editor de texto Vim.'
cover_image: '/images/vim-icon.png'
---

- **[Vim Tutorial](https://www.openvim.com/)**
- **[Vim Diesel's OFFICIAL Vimtutor Let's Play/Commentary! (1 HOUR+ Special)](https://www.youtube.com/watch?v=d8XtNXutVto)**

`vimtutor`: inicia um tutorial interativo do Vim no terminal

## Comandos

### 🏃 Mover o cursor

- **h**: ←

- **j**: ↓

- **l**: →

- **k**: ↑

- **zz**: move o cursor para o centro (na mesma posição)

- **zt**: move o cursor para o topo (na mesma posição)

- **zb**: move o cursor para o fim (na mesma posição)

- **Ctrl+u**: sobe meia página

- **Ctrl+d**: desce meia página

- **{**: move um parágrafo para cima

- **}**: move um parágrafo para baixo

- **0** ou **^**: move o cursor para o começo da linha

- **$**: move o cursor para o final da linha

- **e**: move o cursor até que fim da palavra

- **b**: move o cursor até o começo da palavra

- **w**: move o cursor até o início da próxima palavra

- **G**: move o cursor no final do arquivo

- **gg**: move o cursor no topo do arquivo

- **50%**: vai para a metade do arquivo (serve com qualquer número para ir à porcentagem especificada)

- **''** (duas aspas simples): retorna para a porcentagem anterior

### 🚪 Sair do Vim

- **:q!** ou **ZQ**: fecha o Vim, sem salvar alterações prévias

- **:qq** ou **:wq** ou **:x!** ou **ZZ**: fecha o Vim, salvando as alterações prévias

### 🎨 Modos do Vim

- **i**: entra no modo editor do Vim (insert mode)

- **I**: entra no modo editor do Vim, mas no começo da linha

- **a**: entra no modo editor do Vim, mas com o cursor no caractere da frente

- **A**: entra no modo editor do Vim, mas com o cursor no fim da linha

- **o**: entra no modo de edição pulando uma linha

- **O**: entra no modo de edição pulando uma linha antes

- **ESC**: entra no modo de navegação do Vim

- **/**: inicia o modo de pesquisa do Vim, e pesquisa por ocorrências após o cursor

- **?**: entra no modo de pesquisa, procurando resultados anteriores ao cursor

- **v**: entra no modo de seleção visual do Vim

- **V**: entra no modo de seleção visual, selecionando linhas

- **Ctrl+V**: entra no modo de seleção visual, selecionando blocos

- **?**: entra no modo de busca procurando resultados anteriores

### ❌ Deletar no Vim

- **x**: deleta o caractere que está sobre o cursor

- **d**: operador de exclusão do Vim. Funciona apenas com outro caractere em seguida. Ex: **dw**

- **d$** ou **D**: deleta todo conteúdo que esteja após o cursor, até o final da linha

- **daw**: deleta uma palavra e qualquer espaço em volta dela

- **diw**: deleta uma palavra sem contar os espaços em volta dela

- **dap**: deleta um parágrafo e qualquer espaço em volta

- **dip**: deleta um parágrafo é deixa os espaços em volta

- **di(**: deleta todo conteúdo que está entre parênteses

- **da(**: deleta todo conteúdo que está entre parênteses e também deleta o parênteses

- **c**: deleta carteres e te põe no modo de edição do Vim automaticamente

- **C**: deleta todo conteúdo da linha após o cursor e entra no modo de edição

- **ci(**: deleta todo conteúdo que está dentro de um parênteses e entra no modo de edição

### ⌛ Voltando no tempo com o Vim

Os comandos abaixo podem ser utilizados com qualquer número para definir o tempo a ser utilizado. Caso não haja uma versão no tempo definido, nada será exibido.

- **:earlier 5m**: volta o arquivo na sua versão de 5 minutos atrás

- **:later 5m**: avança o arquivo na sua versão de 5 minutos à frente

### 🧰 Outros comandos

- **:help**: entra no menu de ajuda do Vim

- **:set ic**: faz com que o modo de busca (/ ou ?) ignore case sensitive

- **:set hlsearch**: irá realçar todos os resultados da busca especificada. Para desativar o modo, o comando é **:nohlsearch**

- **Alt**: permite executar comandos do modo Visual do Vim mesmo estando em modo de inserção. Exemplo: **alt+yp**

- **u**: desfaz uma ação (equivale a um ctrl+z)

- **U**: desfaz todas as ações de uma linha

- **Ctrl+r**: refaz uma ação

- **p**: cola textos no Vim

- **r**: substitui um caractere no Vim. Ex.: **ro** substitui um caractere pela letra *O*

- **R**: substitui mais de um caractere (mais útil para substituição de textos com mesma quantidade de caracteres)

- **y**: efetua cópias no Vim

- **Ctrl+g**: mostra a localização do arquivo e o status dele

- **n**: vai para o próximo resultado no modo de busca (/)

- **N**: vai para o resultado anterior no modo de busca (/)

- **%**: encontra um parênteses em comum

- **:s/old/new/g**: substitui todas as ocorrências do texto "old" pelo texto "new". Se não houvesse um *g* no final, iria alterar apenas a primeira ocorrência

- **:!**: executa um comando dentro do Vim. Exemplo: **:!ls**

- **.**: executa o último comando realizado no Vim antes de apertar *ESC*

- **:norm**: executa um comando específico no Vim. Se feito com seleção visual, executará o comando em todo o campo selecionado
