
#Primero necesitamos actualizar el sistema o hacer upgrade segun sea el caso
sudo apt update -y && sudo apt upgrade -y

#luego necesitamos instalar apache2 que sera el manejador de servidor para revision, normalmente va en el puerto 80

sudo apt install apache2

#segun lo que tengamos tenemos que iniciar el servicio de apache2
	
	#iniciar con service
		#detener
		sudo apachectl stop
		#apagar
		sudo apachectl star
		#verificamos servicios
		service --status-all
	#iniciar systemctl
		#revisamos
		sudo systemctl status apache
		#detenemos
		sudo systemctl stop apache
		#prendemos
		sudo systemctl start apache

#instalamos mariadb db server, y maria db cliente que sera el SGDB

sudo apt install mariadb-server mariadb-client

#verificamos el servicio de mariadb
	#service
		#detener
		sudo /etc/init.d/mysql stop
		#iniciar		
		sudo /etc/init.d/mysql start
	#systemctl
		#detener
		 sudo systemctl stop mysqld
		#verificar
		sudo systemctl status mysqld
		#iniciar 
		sudo systemctl start mysqld

#hacemos un poco de hardening al servidor de mariadb

sudo mysql_secure_installation

#instalamos php, en este caso la version mas nueva que es la version 7.2.

sudo apt install php

#reiniciamos apache

#si queremos instalar la version de phpmyadmin pues lo siguiente

sudo apt install phpmyadmin
