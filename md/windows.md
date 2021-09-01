# Windows

## Configurar o sistema para solicitar senha ao executar como admin

[Vídeo](https://www.youtube.com/watch?v=AIks8BQa4to)

[Texto](https://www.majorgeeks.com/content/page/enable_group_policy_editor_in_windows_10_home_edition.html)

- Executar `gpedit.msc`
- Configurações do Windows
- Configurações de Segurança
- Políticas locais
- Opções de segurança
- Controle de Conta de Usuário: comportamento da solicitação de elevação de administradores >> Pedir credenciais

## Fazer apenas atualizações de segurança

[Vídeo](https://www.youtube.com/watch?v=HryjIsPx6Zg)

[Texto](https://christitus.com/windows-update-security-only/)

## Remover limite de banda-larga

[Vídeo](https://www.youtube.com/watch?v=7u1miYJmJ_4)

- Executar `gpedit.msc`
- Modelos Administrativos
- Rede
- Agendador de Pacotes QoS
- Limitar largura de banda reservável: habilitar, alterar valor para 0

- Executar `regedit`
- Acessar *Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft*
- Clicar sobre a pasta *Microsot*, Novo > Chave > nome `Psched`. Dentro da chave, botão direito, novo valor DWORD(32-bit); nome: NonBestEffortLimit
