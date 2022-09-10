---
title: 'Windows'
title_note: '🪟 Windows'
date: '21/06/22'
update: '21/06/22'
excerpt: 'Informações e passo a passos relacionados ao SO.'
cover_image: '/images/windows-icon.png'
---

## Executáveis do sistema

- Painel de Gerenciamento: `compmgmt.msc`
- Gerenciador de Dispositivos: `devmgmt.msc`
- Windows Explorer: `explorer.exe /separate`
- Gerenciador de Tarefas: `taskmgr`
- Powershell: `powershell`
- Painel de Controle: `control`
- Painel de Controle (desinstalação): `appwiz.cpl`
- Dispositivos e Impressoras: `control printers`
- Microsoft Management Console: `mmc.exe`
- Configurações de Som: `mmsys.cpl`
- Alterar configurações do adaptador de rede: `ncpa.cpl`
- Gerenciador de Serviços: `services.msc`
- Opções de Internet: `inetcpl.cpl`
- Configurações de data e hora: `timedate.cpl`
- Configurações do sistema (variável do ambiente): `sysdm.cpl`
- Configurações do sistema (inicialização): `msconfig`
- DirectX Diagnostic Tool: `dxdiag`
- Conexão com Área de Trabalho Remota: `mstsc`
- Active Directory (RSAT): `dsa.msc`

Localização de programas do Windows: **C:\Windows**

Localização de dll's: **C:\Windows\System32**

Windows+R como adm: Digitar o nome do programa e apertar **CTRL+SHIFT+ENTER**

## Configurar o sistema para solicitar senha ao executar como admin

[Vídeo](https://www.youtube.com/watch?v=AIks8BQa4to)

[Texto](https://www.majorgeeks.com/content/page/enable_group_policy_editor_in_windows_10_home_edition.html)

- Executar `gpedit.msc`;
- Clicar em "Configurações do Windows";
- Clicar em "Configurações de Segurança";
- Clicar em "Políticas locais"
- Clicar em "Opções de segurança"
- Controle de Conta de Usuário: comportamento da solicitação de elevação de administradores >> Pedir credenciais

## Fazer apenas atualizações de segurança

[Vídeo](https://www.youtube.com/watch?v=HryjIsPx6Zg)

[Texto](https://christitus.com/windows-update-security-only/)

## Remover limite de banda-larga

[Vídeo](https://www.youtube.com/watch?v=7u1miYJmJ_4)

- Executar `gpedit.msc`
- Clicar em "Modelos Administrativos";
- Clicar em "Rede";
- Clicar em "Agendador de Pacotes QoS";
- Limitar largura de banda reservável: habilitar, alterar valor para 0

- Executar `regedit`;
- Acessar *Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft*;
- Clicar sobre a pasta *Microsot*, Novo > Chave > nome `Psched`. Dentro da chave, botão direito, novo valor DWORD(32-bit); nome: NonBestEffortLimit

## Miscelânea

- Reiniciar o sistema de forma imediata: `shutdown -f -t 00 -r`

- Pasta de inicialização do Windows (usuário): `%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

- Comandos nativos não reconhecidos no prompt: Adicionar na variável de sistema PATH os diretórios `%SystemRoot%;` e `%SystemRoot%\system32;`.

- Gerenciador de Tarefas travado: `CTRL+SHIFT+ESC` (irá iniciar uma outra janela do Gerenciador de Tarefas independente da ocasião).

- Backup emergencial (recuperação) do Office: `%appdata%\Microsoft\`Nome do software (Word, Excel, Powerpoint)
