---
title: 'Google Chrome'
title_note: '🌐 Google Chrome'
date: '10/09/22'
update: '10/09/22'
excerpt: 'Anotações gerais sobre o Google Chrome, mas que se aplica para a engine Chromium.'
cover_image: '/images/chrome-icon.png'
---

## Observação

- Apesar de serem anotações dedicadas ao Chrome, elas também servem para a engine Chromium como um todo. Nos comandos e páginas de configuração, basta trocar 'chrome' pelo nome do navegador que esteja utilizando (edge, brave, etc).

## Páginas de configuração

- `chrome://settings`: Configurações do Chrome
- `chrome://bookmarks`: Página de favoritos do navegador
- `chrome://settings/clearBrowserData`: Guia para limpeza de dados do navegador
- `chrome://settings/cookies`: Detalhes sobre cookies

## Atalhos

- `CTRL+T`: Abre uma nova aba
- `CTRL+W`: Fecha a aba ativa
- `SHIFT+ESC`: Gerenciador de Tarefas
- `CTRL+SHIFT+I`: Inspecionar elemento
- `CTRL+SHIFT+J`: Abrir console do Chrome
- `CTRL+SHIFT+O`: Página de favoritos
- `CTRL+SHIFT+DEL`: Limpar dados do navegador

## 🔧 Reparos e correções

- Problema de certificado: Executar o navegador com o parâmetro `--ignore-certificate-errors-spki-list`.

    Exemplo: `chrome --ignore-certificate-errors-spki-list`

## 🧩 Converter login para base64

Abra o console do Chrome (`CTRL+SHIFT+J`) e digite o comando abaixo:

`encodedData = "Basic " + window.btoa('YOUR_USERNAME:PASSWORD')`

## 🧛‍♂️ Ativar dark-mode em todas as páginas

Digite `chrome://flags` na barra de endereço e busque pela flag *Auto Dark Mode for Web Contents*. Depois, selecione qual será a opção mais agradável. 

**Dica**: *Enable with selective inversion of non-image elements*.