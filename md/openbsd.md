# Open BSD

- **[Isos](https://www.openbsd.org/faq/faq4.html#Download)**
- **[Mirrors](https://www.openbsd.org/ftp.html)**
- **[Manuais](https://man.openbsd.org/)**

## Guia de instalação

- Selecionar 'I' e prosseguir com as configurações padrão do instalador (atentar-se com a parte do particionamento)

- Reiniciar o sistema (caso apareça novamente o menu de instalação, alterar a ordem de boot)

- Executar os comandos abaixo:

    ```sh
    export PKG_PATH=https://cdn.openbsd.org/pub/OpenBSD/$(uname -r)/packages/$(uname -m)

    pkg_add vim nano
    ```

- Adicionar o texto `export PKG_PATH` no arquivo `/root/.profile`

- Executar:

    ```sh
    pkg_add xfce xfce-extras slim slim-themes
    ```

- Adicionar o texto `/usr/local/bin/startxfce4 --with-ck-launch` no arquivo `/home/user/.xsession`

- Adicionar o texto `exec startxfce4` no arquivo `/home/user/.xinitrc`

- Adicionar o texto abaixo no arquivo `/etc/rc.conf`:

    ```sh
    pkg_scripts="dbus_daemon avahi_daemon"
    hald_enable="YES"
    dbus_enable="YES"
    ```

- Executar os comandos abaixo:

    ```sh
    rcctl enable xenodm
    rcctl start xenodm
    reboot
    ```

## Comandos

`sysupgrade -s`: atualiza o sistema

`doas`: equivale ao `sudo` dos sistemas Linux

`pkg_add pacote(s)`: instala os pacotes especificados

`pkg_add -f`: reinstala os pacotes do OpenBSD
