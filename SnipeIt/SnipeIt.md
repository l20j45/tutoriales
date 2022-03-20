# SnipeIT

para crear una instancia de este servicio tenemos tres opciones.

una es  la instalacion pura con LAMP



otra con docker



y otra con docker compose.

sigo intentando la de docker, pero la de compose ya esta chida





## docker

con docker hay dos opciones, una utilizando un env_file y esto facilita todo el proceso



copiar y modificar el env_file

# [my_env_file](./my_env_file )

posteriormente se hace un contenedor de Mysql 5.6

```bash
docker run --name snipe-mysql --env-file=my_env_file --mount source=snipesql-vol,target=/var/lib/mysql -d -P mysql:5.6
```

### 3 sacas una APP_KEY

```bash
docker run --rm snipe/snipe-it
```

sin certificado SSl

```bash
docker run -d -p 5000:80 --name="Inv" --link snipe-mysql:mysql --env-file=my_env_file --mount source=snipe-vol,dst=/var/lib/snipeit snipe/snipe-it
```

```bash
docker run -d -p 5001:80 --name="Inv2" --link snipe-mysql:mysql --env-file=my_env_file2 --mount source=snipe-vol,d
st=/var/lib/snipeit snipe/snipe-it:v5.4.1
```

y listo recomiendo la segunda version porque la primera da fallos aun



## docker compose



con docker compose necesitamos tener instalado primero docker compose

generamos el docker compose yml

```bash
nano docker-compose.yml
```

modificamos el yml a conveniencia




