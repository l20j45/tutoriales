### ver usuarios mysql
`SELECT user FROM mysql.user;`

### ver con host
`SELECT user,host FROM mysql.user;`

### crear usuario para localhost
`CREATE USER 'l20j45'@'%' IDENTIFIED BY 'rooster789.';`
**nota si cambio el localhost por '%' es para todos pues en mariadb el % es comodin**

`GRANT ALL PRIVILEGES ON *. * TO 'l20j45'@'%';`

### agrega todos los privilegios
`GRANT CREATE, SELECT ON * . * TO 'nombre_usuario'@'localhost';`

### refresca privilegios
`FLUSH PRIVILEGES;`

### elimina un usuario
`DROP USER 'usuario'@'localhost';`

### agregar permisos en especifico

`GRANT USAGE ON *.* TO 'basededatos'@"%" IDENTIFIED BY 'prueba12';`

`GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP ON codigofacilito.* TO 'nombre_usuario'@'localhost';`

**tipos de permiso**

**Aquí un listado de algunos permisos que podemos asignar.**

**CREATE permite crear nuevas tablas o bases de datos.**
**DROP permite eliminar tablas o bases de datos.**
**DELETE permite eliminar registros de tablas.**
**INSERT permite insertar registros en tablas.**
**SELECT permite leer registros en las tablas.**
**UPDATE permite actualizar registros en las tablas.**
**GRANT OPTION permite remover permisos de usuarios.**
**SHOW DATABASE Permite listar las bases de datos existentes.**

### ver permisos
`SHOW GRANTS FOR 'techonthenet'@'localhost';`

