---

---

#Comandos utiles docker

- ```
  docker ps
  ```
  
  -  muestra los contenedores de docker

- ```
  docker pull
  ```
  
  - trae una imagen de docker hub

- ```
  docker build
  ```
  
  - construye una imagen de un docker-file

- ```
  docker run
  ```
  
  - trae un contenedor y corre el contenedor de docker hub

- ```
  docker logs
  ```
  
  - muestra los logs de un contenedor

- ```
  docker rm
  ```
  
  - elimina todos un contenedor

- ```
  docker kill $(docker ps -q)
  ```
  
  - para todos los contenedores

- ```
  docker rm $(docker ps -a -q)
  ```
  
  - borra los contenedores

- ```
  docker rmi $(docker images -q)
  ```
  
  - borra todas las imagenes



### RUN

docker run [opciones] [nombre-imagen] [comandos] [argumentos]

- Ejemplo: Uso básico
  
  -  `docker run hello-world`

- Ejemplo: Asignar variables de entorno

- Utilizamos la imagen mysql, y creamos la env de contraseña
  
  - `docker run -e MYSQL_ROOT_PASSWORD=toor mysql`

- Ejemplo: Correr en background (detach)
  
  - `docker run -d hello-world`

- Ejemplo: Mapear el puerto interno 80 al 8080 público
  
  - `docker run -d -p 8080:80 nginx`

- Ejemplo: Compartir un directorio entre contenedor y local
  
  - `docker run -it -v /mi/path/local:/path/contenedor ubuntu`

- Ejemplo: Compartir volúmenes entre contenedores
  
  - `docker run -it --name ubuntu2 --volumen-from ubuntu1 ubuntu`

- Ejemplo: Asociar volumen creado anteriormente
  
  - `docker run -it mivolumen:/path/contenedor ubuntu`

### START

- docker start [opciones] [contenedor]# Ejemplo: Uso básico  
  
  - `docker start 830cb7a4232b`

### STATS

- docker stats [opciones] [nombre-contenedor]# 

- Ejemplo: Uso básico  
  
  - `docker stats`

- Ejemplo: Dar formato a salida  
  
  - `docker stats --format "{{.Container}}: {{.CPUPerc}}"`

### PS

docker ps [opciones]

- Ejemplo: Uso básico
  
  - `docker ps`

- Ejemplo: Mostrar el uso de disco
  
  - `docker ps -s`

- Ejemplo: Obtener el contenedor id 830cb7a4232b
  
  - `docker ps --filter "id=830cb7a4232b"`

- Ejemplo: Dar formato de salida
  
  - `docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Size}}\t{{.Ports}}"`

- Ejemplo: Último contenedor que ha tenido alguna operación
  
  - `docker ps -l`

- Últimos 4 contenedores que han tenido alguna operación
  
  - `docker ps -n 4`

### IMAGES

docker images [opciones] [repositorio]

- Ejemplo: Uso básico  
  
  - `docker images`

- Ejemplo: Listar imágenes de un repositorio  
  
  - `docker images hello-world`

- Ejemplo: Listar imágenes de un reposito y tag  
  
  - `docker images hello-world:latest`

- Ejemplo: Dar formato a salida  
  
  - `docker images --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}\t{{.Size}}" `

- Ejemplo: Ver historia  
  
  - `docker image history hello-world`

### rm

docker rm [opciones] [contenedor...]

- Ejemplo: Uso básico  
  
  - `docker rm 830cb7a4232b`

- Ejemplo: Eliminar contenedor y sus volúmenes  
  
  - `docker rm -v 830cb7a4232b`

- Ejemplo: Eliminar todos los contenedores  
  
  - `docker container rm $(docker container ls -aq)  
    docker rm `docker ps -aq`  
    docker rm -f $(docker ps -aq)`

- Ejemplo: Eliminar volumen  
  
  - `docker volume rm 830cb7a4232b`



### EXEC

docker exec [opciones] [contenedor][comandos...]

- Ejemplo: Uso básico  
  
  - `docker exec 7b288331d9c5 echo hola`

- Ejemplo: Ingresar a terminal de contenedor  
  
  - `docker exec -it 7b288331d9c5 /bin/bash`



[**Logs**](https://docs.docker.com/engine/reference/commandline/logs/): Obtener logs desde los contenedores

docker logs [opciones] [contenedor]

- Ejemplo: Uso básico  
  
  - `docker logs 7b288331d9c5`

- Ejemplo: Quedar escuchando log  
  
  - `docker logs -f 7b288331d9c5`

- Ejemplo: Obtener logs de un día en específico  
  
  - `docker logs --since 2020-07-16T00:00:00 --until 2020-07-16T23:59:59 7b288331d9c5`

- Ejemplo: Filtrar logs por la palabra hola  
  
  - `docker logs 7b288331d9c5 2>&1 | grep "hola"`

# kill

docker kill [opciones] [contenedores...]

- Ejemplo: Uso básico  
  
  - `docker kill 7b288331d9c5`

### inspect

docker inspect [opciones] [contenedores...]

- Ejemplo: Uso básico
  
  - `docker inspect 7b288331d9c5`

- Ejemplo: Listar variables de entorno  
  
  - `docker inspect --format='{{range .Config.Env}}{{println .}}{{end}}' 7b288331d9c5`

- Ejemplo: Exportar configuración  
  
  - `docker inspect 7b288331d9c5 > inspect.txt****`

### network

docker network [comando]

- Ejemplo: Listar redes  
  
  - `docker network ls`

- Ejemplo: Eliminar una red  
  
  - `docker network rm 1104fc7ed905`

- Ejemplo: Eliminar todas las redes no usadas
  
  - `docker network prune`

- Ejemplo: Crear una red  
  
  - `docker network crear mired`

- Ejemplo: Conectar en caliente un contenedor a una red 
  
  - `docker network connect mired 1104fc7ed905`

- Ejemplo: Desconectar en caliente un contenedor a una red  
  
  - `docker network disconnect mired 1104fc7ed905****`

``

system prune
docker system prune [opciones]

- Ejemplo: Realizar prune  
  
  - `docker system prune`

- Ejemplo: Eliminar todas las imágenes, incluso de contenedores detenidos  
  
  - `docker system prune -a`

- Ejemplo: Eliminar volúmenes  
  
  - docker system prune --volumes
