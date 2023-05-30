# Instalacion del servicion de ftp

primero necesitamos actualizar el sistema

```bash
   sudo apt update
```

 lo que necesitamos es un servidor en este caso utilizaremos vsftpd

```bash
sudo apt install vsftpd
```

necesitamos pasar el archivo de configuracion por defecto para comenzar a trabajar con el

```bash
sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.original
```

comenzamos a editar el archivo de conf

```bash
sudo nano /etc/vsftpd.conf
```

modificamos el archivo a como muestra en las siguientes imagenes![](D:\cursos\tutoriales\ftp\modificacion1.png)

![](D:\cursos\tutoriales\ftp\Modificacion2.png)

tambien creamos esta restriccion

```bash
allow_writeable_chroot=YES
```

creamos una llave SSL para la encriptacion

```bash
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/private/vsftpd.pem    
```

modificamos el archivo conf de nuevo

```bash
sudo nano /etc/vsftpd.conf
```

comentamos la parte de los certificados cert

![](D:\cursos\tutoriales\ftp\modificacion3.png)

agregamos el siguiente texto al archivo

```bash
rsa_cert_file=/etc/ssl/private/vsftpd.pem
rsa_private_key_file=/etc/ssl/private/vsftpd.pem

ssl_enable=YES

allow_anon_ssl=NO
force_local_data_ssl=YES
force_local_logins_ssl=YES

ssl_tlsv1=YES
ssl_sslv2=NO
ssl_sslv3=NO

require_ssl_reuse=NO
ssl_ciphers=HIGHO



```

reiniciamos el servicio

```bash
sudo systemctl restart vsftpd
```

    




