## Script Para subir cosas por Ftp

para poder subir cosas desde termina a ftp hay muchas opciones, una de ellas y que fue la que mas me gusto por su versalitidad con otros protocolos es [LFTP](https://lftp.yar.ru)

este es un proyecto de un ruso que aun tiene soporte y funciona para hacer sincronizaciones con varios formatos como FTP, HTTP, FISH, SFTP, HTTPS and FTPS protocols

para usarlo primero tendriamos que instalarlo

```bash
sudo apt install lftp
```

posteriormente podemos hacer un script que haga la sincronizacion correspondiente como este

```bash
#!/bin/bash
echo "Se estan sincronizando los totales"
echo ""
echo ""
#Servidor
HOST=""
#Usuario
USER=""
#Contraseña
PASS=""
#Ruta Local
LCD="Total"
#Ruta Remota 
RCD="/Total"
lftp -c "set ftp:list-options -a;
open ftp://$USER:$PASS@$HOST;
lcd $LCD;
cd $RCD;
mirror --delete --verbose --ignore-time --parallel=4"
```

listo con esto tenemos un script que baja las cosas via ftp a un servidor sin ssl o con SSL segun sea la configuracion

basicamente es lo mismo que el otro pero solo ponesmo el Reverse o no
