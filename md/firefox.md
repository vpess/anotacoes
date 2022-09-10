---
title: 'Firefox'
title_note: '🦊 Firefox'
date: '10/09/22'
update: '10/09/22'
excerpt: 'Informações e comandos sobre o Firefox.'
cover_image: '/images/firefox-icon.png'
---

## Observação

- As anotações a seguir também servem para navegadores que são baseados no Firefox, como o [Librewolf](https://librewolf.net/).

## Páginas

- `about:preferences#privacy`: Preferências de privacidade. Menu que permite a exclusão de cache, cookies e histórico
- `about:downloads`: Exibe os downloads feitos
- `about:profiles`: Gerenciador de perfis do navegador
- `about:support`: Detalhes gerais, incluindo restauração do navegador
- `about:cache`: Detalhes de cache (localização no disco, etc)
- `about:performance`: Painel de controle do Firefox
- `about:sessionrestore`: Opção de restauração do Firefox (recupera as últimas abas que foram abertas)
- `about:config`: Configurações avançadas do Firefox (bloqueado na Petrobras)
- `about:memory`: Console de memória (relatórios de consumo e etc)
- `about:about`: Exibe todos os "about:" do Firefox

## Atalhos

- `CTRL+I`: Exibe informações sobre a página
- `CTRL+T`: Abre uma nova aba
- `CTRL+W`: Fecha a aba ativa
- `CTRL+SHIFT+I`: Inspecionar elemento
- `CTRL+SHIFT+O`: Exibe os favoritos do navegador
- `CTRL+SHIFT+Y`: Exibe downloads feitos
- `CTRL+SHIFT+DEL`: Preferências de privacidade

## Misc

- Arquivos que são visualizados pelo navegador (Abrir com...): `%localappdata%\temp`
- Perfis do Firefox: `%appdata%\Mozilla\Firefox\Profiles`
- Favoritos: `%appdata%\Mozilla\Firefox\Profiles\[pasta do perfil]\bookmarkbackups` (confirmar a pasta do perfil em `about:profiles`)

## 🔧 Reparos e correções

- Recriar perfil do Firefox: É possível realizar de uma das formas abaixo:

  - Digitar o comando `firefox -no-remote -p`;
  - Renomear a pasta `%appdata%\Mozilla`
