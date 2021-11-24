#instalamos cliente

sudo apt install mariadb-client

#creamos volumen para datos persistentes
docker volume create basededatos

#creamos contenedor docker
docker run --detach --name mariadb-server -p 3306:3306 -v basededatos:/var/lib/mysql --env MARIADB_USER=l20j45 --env MARIADB_PASSWORD=Pickner12. --env MYSQL_ROOT_PASSWORD=prueba12  mariadb:latest


#conectamos al servidor
mysql -h 127.0.0.1 -u root -p
