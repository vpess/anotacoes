---
title: 'Linux'
title_note: '🐧 Linux'
date: '25/12/21'
update: '25/12/21'
excerpt: 'Informações gerais e e comandos do Linux.'
cover_image: '/images/tux-icon.png'
---

## Comandos mais utilizados e seus parâmetros

- `date`: Exibe a data e a hora do sistema operacional.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`+%H`| mostra apenas a hora.|
    |`%+M`| mostra apenas o minuto.|
    |`%+m`| mostra apenas o mês.|
    |`+%D`| mostra a data em formato mês/dia/ano.|
    |`+%d`| mostra apenas o dia da data.|

- `cal`: Exibe o calendário do mês do sistema.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-y`| exibe o calendário de todos os meses do ano.|
    |`-3`| exibe três meses do ano (o anterior, o atual e o próximo)|
    |`yyyy`| exibe o calendário do ano, onde **yyyy** corresponde ao ano.|
    |`mm yyyy`| exibe o mês e ano do calendário, onde **mm** corresponde ao mês e **yyyy** corresponde ao ano.|

- `seq`: Gera uma sequência numérica.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`10`| gera uma sequência numérica de 1 a 10.|
    |`0 10`| gera uma sequência numérica de 0 a 10.|
    |`0 2 10`| gera uma sequência numérica de 0 a 10, incrementando de 2 em 2 números.|

- `expr`: Comando utilizado para realizar cálculos/contas.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`4 \* 2`| Calcula 4 vezes 2|
    |`8 '*' 2`| Calcula 8 vezes 2|
    |`4 / 2`| Calcula 4 divido por 2|

- `df`: Exibe detalhes das partições do sistema.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-h`| exibe detalhes das partições do sistema de forma legível.|

- `du`: Exibe detalhes do tamanho de um arquivo.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-h`| exibe detalhes do tamanho de um arquivo de forma legível.|

- `cd`: Altera um diretório no terminal.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`~`| direciona ao diretório home (/home/username). |
    |`..`| retorna um diretório no terminal. |
    |`.`| exibe o diretório utilizado. |
    |`-`| retorna para o último diretório utilizado no terminal. |

- ls: Lista o diretório informado.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-i`| exibe o número inode dos diretórios.|
    |`-l`| exibe informações sobre os arquivos (tamanho, permissões, etc).|
    |`-s`| exibe o tamanho dos arquivos (em bytes).|
    |`-a`| exibe todos os arquivos do diretório, incluindo os ocultos.|
    |`-t`| exibe os arquivos do diretório, por ordem de data de criação ou data de modificação (o mais recente).|
    |`-r`| exibe os arquivos em ordem reversa ao ls comum.|
    |`-R`| exibe os arquivos do diretório, incluindo os arquivos que estejam dentro dos subdiretórios.|
    |`-h`| exibe os arquivos do diretório e exibe o tamanho dos mesmos. |
    |`-1`| exibe apenas o nome dos arquivos/diretórios |

- `ln`: Cria um hardlink de um arquivo.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    | `-s` | cria um softlink do arquivo. |

- `ps`: Exibe os processos da sessão atual.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    | `axu` | exibe os processos do sistema. |

- `cp`: Realiza a cópia de arquivos no terminal.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-r`| copia diretórios no terminal. |
    |`-i`| copia cada arquivo de um diretório, exibindo um prompt de confirmação. |
    |`-v`| copia os arquivos de um diretório e exibe as ações que foram realizadas.|

- `mv`: Move ou renomeia arquivos de um diretório.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    | `-i` | Move ou renomeia arquivos de um diretório, exibindo um prompt de confirmação. |

- `mkdir`: Cria um diretório.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    | `-p` | Permite criar um diretório e também a sua árvore de diretórios. **Exemplo: `mkdir -p pasta1/pasta2`**|

- `rm`: Remove arquivos de um diretório.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-r`| deleta um diretório e seus subdiretórios. |
    |`-i`| deleta um arquivo exibindo um prompt de confirmação. |
    |`-f`| deleta um arquivo de forma forçada. |
    |`-rf`| remove pastas ou diretórios.|
    |`-ri`| deleta cada arquivo de um diretório, exibindo um prompt de confirmação. |
    |`-rv`| deleta os arquivos de um diretório, e exibe quais arquivos foram deletados. |

- `wc`: Exibe a quantidade de linhas, palavras e byte/caractere (respectivamente) de um arquivo de texto.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-l`| exibe a quantidade de linhas de um arquivo de texto. |
    |`-w`| exibe a quantidade de palavras de um arquivo de texto. |
    |`-c`| exibe a quantidade de caracteres de um arquivo de texto. |
    |`-L`| exibe a quantidade de caracteres da maior linha de um arquivo de texto. |

- `tr`: Substitui caracteres de um arquivo. Normalmente, exige um redirecionameto de entrada ou saída.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`a Z`| substitui as letras **a** por letras **Z**. |
    |`-s`| comprime repetições em uma só. |
    |`-d`| deleta os caracteres informados. |

- `cut`: Remove seções de cada linha de arquivo.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-c`| recorta caracteres |
    |`-d`| define o delimitador (`cut -d ";"`) |
    |`-f`| recorta campos |

- `diff`: Compara arquivos.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-w`| compara arquivos, ignorando espaços em branco. |
    |`-r`| compara diretórios |

- `uniq`: Retira strings duplicadas da exibição do arquivo (funciona apenas com repetições sequenciais).

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-u`| exibe apenas os valores que apareceram uma vez. |
    |`-d`| exibe apenas os valores que apareceram mais de uma vez. |
    |`-c`| exibe a quantidade de vezes que os valores aparecem. |

- `echo`: Escreve algo no terminal (equivalente ao print em outras linguagens de programação).

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-n`| escreve algo no terminal sem quebra de linha. |
    |`-e`| escreve algo no terminal com opções de tabulação (checar `man echo`) |

- `cat`: Exibe o conteúdo de arquivos de texto no terminal. Permite exibir mais de um arquivo de texto de forma concatenada.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-b`| enumera as linhas do conteúdo do arquivo de texto (apenas linhas que tenham conteúdo). |
    |`-n`| enumera as linhas do conteúdo do arquivo de texto. |
    |`-A`| exibe caracteres especiais e tabulações. |

- `history`: Mostra todo o histórico de comandos no terminal. Pode ser usado o padrão **!+numero** para executar o comando correspondente. **Exemplo: `!1260`**.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`10`| mostra os últimos 10 comandos executados. O comando serve para qualquer número que for digitado. |
    |`-c`|  limpa todo o histórico de comandos do terminal. |

- `grep`: Efetua busca de padrões através de um texto digitado. **Exemplo: `dpkg -l | grep jdk`**.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`-i`| pesquisa de texto/caractere sem case sensitive. |
    |`-c`| conta quantas ocorrências de pesquisa foram encontradas. |
    |`-v`| não retorna o resultado da pesquisa mencionada. |
    |`-r`| realiza a pesquisa de forma recursiva. |
    |`-l`| mostra o arquivo que possui a ocorrência pesquisada. |
    |`-Ax`| mostra x linhas após a ocorrência pesquisada, onde **x** representa uma quantidade. |
    |`-Bx`| mostra x linhas antes da ocorrência pesquisada, onde **x** representa uma quantidade. |

- `sed`: Substitui ou deleta conteúdos.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`'1,3 d'`| deleta o conteúdo das linhas 1 a 3. |
    |`'/Rafael/d'`| deleta todas as linhas que tiverem o conteúdo 'Rafael'. |
    |`'s/Paulo/Joao/'`| substitui a palavra Paulo por Joao na primeira ocorrência. |
    |`'s/Paulo/Joao/g'`| substitui a palavra Paulo por Joao em todas as ocorrências. |

- `find`: Busca por pastas ou arquivos dentro do diretório.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    |`./ -name`| efetua a busca por arquivos através do nome. |
    |`./ -user`| efetua a busca por arquivos através do nome de usuário. |
    |`./ -name * -exec ls -l {} \;`| O parâmetro exec permite a execução de um outro comando junto do find. |

- `hostname`: Exibe o nome do sistema.

    | Parâmetro | Descrição |
    | ------------ | ------------ |
    | `-l` | exibe o endereço IP do sistema (localhost/loopback) |

- `pwd`: Exibe o diretório em que o terminal está (a abreviação equivale a '_Print Working Directory_').

- `exit`: Fecha o terminal.

- `more`: Exibe arquivos no terminal, com paginação.

- `less`: Abre arquivos de texto no terminal (de forma dedicada) em modo leitura.

- `tac`: Exibe arquivos de texto no terminal, mas o conteúdo do texto é mostrado em ordem reversa. Permite exibir mais de um arquivo de texto de forma concatenada.

- `head`:  Exibe as dez primeiras linhas de um arquivo de texto. É possível alterar a quantidade de linhas usando o comando da forma a seguir: `head -n 20 arquivo.txt`.

- `tail`:  Exibe as dez últimas linhas de um arquivo de texto. É possível alterar a quantidade de linhas usando o comando da forma a seguir: `tail -n 20 arquivo.txt`.

- `sort`: Ordena os caracteres/arquivos (verificar `man sort`).

- `touch`: Cria arquivos em branco ou atualiza arquivos existentes.

- `file`: Exibe propriedades de um arquivo, como sua extensão, tamanho e etc.

- `clear`: Limpa as informações do terminal (também funciona com **CTRL+L**).

- `reset`: Similar ao `clear`, porém reinicia o terminal do ponto de origem.

- `pidof`: Encerra processos pelo terminal, usando o PID do processo como parâmetro.

- `kill`: Exibe o número do processo de um determinado programa (se o programa não estiver sendo executado, não haverá output).

- `pkill`: Encerra um processo usando o nome como parâmetro.

- `top`: Exibe no terminal os programas abertos (system monitor simplificado).

- `htop`: Exibe um system monitor no terminal.

- `whatis`: Exibe uma descrição breve de um comando da categoria _executable program_.

- `man`: Informa o que um comando da categoria executable program faz e suas variações.

- `help`: Informa o que um comando da categoria shell builtin faz e suas variações.

- `type`: Mostra a qual categoria pertence o comando digitado. **Exemplo: `type cal`**.

- `which`: Exibe o diretório onde o comando pertence. Não mostrará nada em comandos da categoria shell builtin. **Exemplo: `which cal`**.

- `sleep`: Contador/temporizador (valor padrão em segundos).

- `gedit`: Abre arquivos no terminal usando o editor de texto.

- `nano`: Editor de texto do terminal.

- `neofetch`: Exibe informações do sistema de forma interativa.

- `pacman`: Gerenciador de pacotes de distribuições Arch.

`pacman -S package-name`: realiza a instalação do pacote.

`pacman -Syu`: atualiza os pacotes e aplica as atualizações no sistema.

`pacman -Ss`: pesquisa por pacotes no repositório geral.

`pacman -Rns package-name`: remove o pacote do sistema e todas as suas dependências.

`pacman -Sc`: remove todos os pacotes antigos que permanecem armazenados no disco.

| Parâmetro | Descrição |
| ------------ | ------------ |
|`-S`| instala pacote(s)|
|`-y`| sincroniza a base de dados dos repositórios/pacotes (adicionar mais um **y** irá fazer um double-check). |
|`-u`| realiza a atualização dos programas presentes na base de dados dos repositórios.|
|`-w`| realiza o download dos programas, permitindo a instalação manual posteriormente. |
|`-s`| pesquisa pacotes. |
|`-R`| remove pacotes. |
|`-Rs`| remove os pacotes e suas dependências.|
|`-Rns`| remove pacotes, suas dependências e arquivos de configuração do sistema que são insalados junto com o programa.|
|`-Q`| lista todos os pacotes instalados no sistema. |
|`-Qe`| lista todos os programas instalados explicitamente instalados pelo usuário. |
|`-Qq`| lista apenas o nome dos pacotes (sem expor a versão ou demais detalhes). |
|`-Qm`| lista todos os programas instalados via AUR. |
|`-Qn`| lista todos os programas instalados via repositorio principal. |
|`-Qdt`| lista dependencias que nao estao sendo mais utilizadas. |
|`-Qs`| pesquisa na lista de programas do sistema. |

➡️ Arquivo de configuração do Pacman: **`/etc/pacman.conf`**
