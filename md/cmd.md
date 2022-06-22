---
title: 'Cmd'
title_note: '📟 Cmd'
date: '22/06/22'
update: '22/06/22'
excerpt: 'Comandos do Cmd, normalmente utilizando em arquivos .bat.'
cover_image: '/images/cmd-icon.png'
---

- Verificar versão do Windows: `ver`
- Verificar servidor de logon: `set logonserver`
- Visualizar grupos do Active Directory: `net user [id] /domain`
- Verificar o servidor em que o IP está contido: `nslookup IP`
- Parar spooler de impressão: `net stop spooler`
- Iniciar spooler de impressão: `net start spooler`
- Executar progama com privilégio de administrador: `runas /noprofile /user:domain\admin-username "program-name"`
- Incluir usuário como adm (necessário ter privilégio adm): `net localgroup Administradores domain-name\XXXX /add`
- Excluir usuário como adm (necessário ter privilégio adm): `net localgroup Administradores domain-name\XXXX /delete`
- Descobrir IP de impressora (necessário ter privilégio adm): `nbtstat -a printer-name`
- Forçar replicação entre servidores do Active Directory: `repadmin /syncall /AdeP`
- Exibe o caminho percorrido até chegar ao servidor: `tracert ip-address`
- Exibir servidores armazenados em cache DNS: `ipconfig /displaydns`
- Excluir servidores armazenados em cache DNS: `ipconfig /flush`
