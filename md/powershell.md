---
title: 'Powershell'
title_note: '🐚 Powershell'
date: '01/09/21'
update: '01/09/21'
excerpt: 'Informações e comandos do Powershell.'
cover_image: '/images/powershell-icon.png'
---

## -> Comandos

- Ad no Powershell: `Import-Module ActiveDirectory`
- Verificar informações do computador: `Get-ComputerInfo`
- Comando similar ao grep: `Select-String -Pattern`
- Comando similar ao touch: `New-Item`
- Comando similar ao mkdir: `New-Item -path`
- Comando similar ao rm -r: `Remove-Item -recurse`

## -> Exemplos de código (scripts)

- Copiar/colar arquivos entre computadores ([Referencia](https://richardspowershellblog.wordpress.com/2015/05/28/copy-files-over-ps-remoting-sessions/)):

```ps
$s = New-PSSession -ComputerName MI00000000 -Credential (Get-Credential)
Copy-Item nomedoarquivo -Destination "diretorio_destino" -ToSession $s
```

- Ver quem está logado no computador:

```ps
Get-WmiObject –ComputerName MI00000000 –Class Win32_ComputerSystem | Select-Object UserName
```

## -> Aliases

| Comando | Alias |
| ------ | ------ |
| `Foreach-Object` | `%` **ou** `foreach`|
| `Where-Object` | `?` **ou** `where`|
| `Add-Content` | `ac` |
| `Add-PSSnapIn` | `asnp` |
| `Get-Content` | `cat` **ou** `gc` **ou** `type`|
| `Set-Location` | `cd` **ou** `chdir`  |
| `Clear-Content`  | `clc`  |
| `Clear-Host`  | `clear` **ou** `cls`  |
| `Clear-History`  | `clhy`  |
| `Clear-Item`  | `cli`  |
| `Clear-ItemProperty`  | `clp`  |
| `Clear-Variable`  | `clv`  |
| `Compare-Object`  | `compare` **ou** `diff` |
| `Copy-Item`  |   `copy` **ou** `cp` **ou** `cpi`  |
| `Copy-ItemProperty`  |   `cpp`  |
| `Convert-Path`  |   `cvpa`  |
| `Disable-PSBreakpoint`  |   `dbp`  |
| `Remove-Item`  |   `del` **ou** `erase` **ou** `rmdir` **ou** `rm` **ou** `rd` |
| `Get-ChildItem`  |   `dir` **ou** `gci` **ou** `ls` |
| `Enable-PSBreakpoint`  |   `ebp`  |
| `Write-Output`  |   `echo` **ou** `write`  |
| `Export-Alias`  |   `epal`  |
| `Export-Csv`  |   `epcsv`  |
| `Export-PSSession`  |   `espn`  |
| `Enter-PSSession`  |   `etsn`  |
| `Exit-PSSession`  |   `exsn`  |
| `Format-Custom`  |   `fc`  |
| `Format-List`  |   `fl`  |
| `Format-Table`  |   `ft`  |
| `Format-Wide`  |   `fw`  |
| `Get-Alias`  |   `gal`  |
| `Get-PSBreakpoint`  |   `gbp`  |
| `Get-Command`  |   `gcm`  |
| `Get-PSCallStack`  |   `gcs`  |
| `Get-PSDrive`  |   `gdr`  |
| `Get-History`  |   `ghy` **ou** `h` **ou** `history`|
| `Get-Item`  |   `gi`  |
| `Get-Job`  |   `gjb`  |
| `Get-Location`  |   `gl`  |
| `Get-Member`  |   `gm`  |
| `Get-Module`  |   `gmo`  |
| `Get-ItemProperty`  |   `gp`  |
| `Get-Process`  |   `gps`  |
| `Group-Object`  |   `group`  |
| `Get-PSSession`  |   `gsn`  |
| `Get-PSSnapIn`  |   `gsnp`  |
| `Get-Service`  |   `gsv`  |
| `Get-Unique`  |   `gu`  |
| `Get-Variable`  |   `gv`  |
| `Get-WmiObject`  |   `gwmi`  |
| `Invoke-Command`  |   `icm`  |
| `Invoke-Expression`  |   `iex`  |
| `Invoke-History`  |   `ih`  |
| `Invoke-Item`  |   `ii`  |
| `Import-Alias`  |   `ipal`  |
| `Import-Csv`  |   `ipcsv`  |
| `Import-Module`  |   `ipmo`  |
| `Import-PSSession`  |   `ipsn`  |
| `powershell_ise.exe`  |   `ise`  |
| `Invoke-WMIMethod`  |   `iwmi`  |
| `Stop-Process`  |   `kill` **ou** `spsv` **ou** `spps` |
| `Out-Printer`  |   `lp`  |
| `New-Item`  |   `ni`  |
| `Measure-Object`  |   `measure`  |
| `Move-Item`  |   `mi` **ou** `mv`  |
| `New-PSDrive`  |   `mount` **ou** `ndr` |
| `Move-ItemProperty`  |   `mp`  |
| `New-Alias`  |   `nal`  |
| `New-Item`  |   `ni`  |
| `New-Module`  |   `nmo`  |
| `New-PSSession`  |   `nsn`  |
| `New-Variable`  |   `nv`  |
| `Out-GridView`  |   `ogv`  |
| `Out-Host`  |   `oh`  |
| `Pop-Location`  |   `popd`  |
| `Get-Process`  |   `ps`  |
| `Push-Location`  |   `pushd`  |
| `Get-Location`  |   `pwd`  |
| `Invoke-History`  |   `r`  |
| `Remove-Breakpoint`  |   `rbp`  |
| `Receive-Job`  |   `rcjb`  |
| `Remove-PSDrive`  |   `rdr`  |
| `Rename-Item`  |   `ren` **ou** `rni`  |
| `Remove-Job`  |   `rjb`  |
| `Remove-Module`  |   `rmo`  |
| `Rename-ItemProperty`  |   `rnp` **ou** `rp`  |
| `Remove-PSSession`  |   `rsn`  |
| `Remove-PSSnapin`  |   `rsnp`  |
| `Remove-Variable`  |   `rv`  |
| `Resolve-Path`  |   `rvpa`  |
| `Remove-WMIObject`  |   `rwmi`  |
| `Start-Job`  |   `sajb`  |
| `Set-Alias`  |   `sal`  |
| `Start-Process`  |   `saps` **ou** `start` |
| `Start-Service`  |   `sasv`  |
| `Set-PSBreakpoint`  |   `sbp`  |
| `Set-Content`  |   `sc`  |
| `Select-Object`  |   `select`  |
| `Set-Variable`  |   `set` **ou** `sv`  |
| `Set-Item`  |   `si`  |
| `Set-Location`  |   `sl`  |
| `Start-Sleep`  |   `sleep`  |
| `Sort-Object`  |   `sort`  |
| `Set-Property`  |   `sp`  |
| `Stop-Job`  |   `spbc`  |
| `Set-WMIInstance`  |   `swmi`  |
| `Tee-Object`  |   `tee`  |
| `Wait-Job`  |   `wjb`  |
| `help`  |   `man`  |
| `mkdir`  |   `md`  |
