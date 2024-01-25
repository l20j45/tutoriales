### Ver programas instalados

`cat /var/log/dpkg.log | grep "install"`

`grep " install " /var/log/dpkg.log`

### para apt
`apt list --installed`

### para ver con dpkg
`dpkg -l`

### ver los servicios corriendo en service

`service --status-all | grep '\[ + \]'`

### ver todos los servicios

`service --status-all`

