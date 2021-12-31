---
title: 'Windows'
title_note: '🪟 Windows'
date: '01/09/21'
update: '01/09/21'
excerpt: 'Informações e passo a passos relacionados ao SO.'
cover_image: '/images/windows-icon.png'
---

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
