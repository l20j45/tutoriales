## Script de respaldos de sql

**Cosas a tener en cuenta**

para este script utilizo tres programas que no vienen en las distribuciones normales que son:

7z (7zip)

pv (progresbar)

mysql (mysql-client)

Cree este script para poder sacar los respaldos de una serie de basde de datos con el fin de poder automatizarlos, realmente funciona con cualquier motor de mysql o mariadb aunque es basico ayuda bastante porque puedes estar tomando varias bd y hacerlo todo por terminal, aqui podre dos archivos que son los importantes uno es el ejecutante, y el otro la lectura para poder tomar los archivos de configuraciond de las bases de datos

### ARCHIVO DE CONFIGURACION

```bash
"nombre de la bd"-"server de la bd"-"usuario de la bd"-"contraseña de la bd"-"puerto de la bd"-"identificador extra"

### SCRIPT QUE LEE EL ARCHIVO DE CONFIGURACION
```

```bash
#!/bin/bash
#saco la fecha del dia de hoy
date=$(date +"%d-%b-%Y")
#creo una carpeta llamada respaldos donde lo ejecute
mkdir respaldos
#comenzamos a leer linea por linea
while IFS= read -r line
do
    #ponemos un delimitador con el cual trosearemos la cadena leida
    delimiter="-"
    string=$line$delimiter
    
    myarray=()
    while [[ $string ]]; do
#rompemos la linea con el delimitador y lo guardamos en el arreglo  
    myarray+=( "${string%%"$delimiter"*}" )
    string=${string#*"$delimiter"}
    done

    #ya descompuesto el arreglo tomamos cada parametro
    host=${myarray[1]}
    user=${myarray[2]}
    password=${myarray[3]}
    port=${myarray[4]}
    db_name=${myarray[0]}
    #generamos un nombre para nuestro archivo de salida
    nombrefinal=$db_name-$date.sql
    echo $nombrefinal
    #ponemos todos los respaldos en la carpeta creada
    backup_path="respaldos"
    #le damos permisos al archivo
    umask 177
    #hacemos el dump de las bases de datos
    #nota importante para generar el progresbar use el comando pv
    mysqldump -f --port=$port --user=$user --password=$password --host=$host $db_name | pv --progress --size 100m > $backup_path/$db_name-$date.sql
#leemos el archivo dat con la estructura anteriormente dada
done < /mnt/d/cursos/pythonTrabajo/datos.dat
#estoy comprimiendo con 7z para hacerlo mejor
7z a -mx=5 basesDatos$date.7z respaldos -sdel
#muevo el resultante a la carpeta donde se subira posteriormente
mv basesDatos$date.7z /mnt/c/Users/winda/OneDrive/Trabajo/respaldos


```

para realizarlo selecto es parecido solo cambian unas cosas como

agregar un if y mostrar opciones

```bash
#!/bin/bash
date=$(date +"%d-%b-%Y")
mkdir respaldosEspecifico
echo "0 sipref"
echo "1 tequila"
echo "2 tabasco"
echo "3 ixtlan"
echo "4 la paz"
echo "5 san jorge"
echo "6 vallarta"
echo "7 san gaspar"
echo "8 contreras"
echo "9 davila"
echo "10 juchipila"
echo "11 dev"
echo "12 local"
echo "selecciona tu opcion"
read opcion
contador=0
entro=0
nombreCompilado=""
while IFS= read -r line
do
    delimiter="-"
    string=$line$delimiter
    
    myarray=()
    while [[ $string ]]; do
    myarray+=( "${string%%"$delimiter"*}" )
    string=${string#*"$delimiter"}
    done

    
    host=${myarray[1]}
    user=${myarray[2]}
    password=${myarray[3]}
    port=${myarray[4]}
    db_name=${myarray[0]}
    nombrefinal=$db_name-$date.sql
    backup_path="respaldosEspecifico"

    umask 177
	if [ $contador = $opcion ];
	then
		echo "respaldando $db_name"
		nombreCompilado="$db_name-$date"
		mysqldump -f --port=$port --user=$user --password=$password --host=$host --ignore-table=$db_name.online_view_app_contratos --ignore-table=$db_name.online_view_app_estado_cobro --ignore-table=$db_name.online_view_historico $db_name | pv --progress --size 100m > $backup_path/$db_name-$date.sql
		((entro=1))

	fi
	((contador++))
	
done < /mnt/d/cursos/pythonTrabajo/datos.dat


if [ $entro = 1 ];
then
	echo "se crea el archivo de respaldo"
	7z a -mx=5 $nombreCompilado.7z respaldosEspecifico -sdel
	mv $nombreCompilado.7z /mnt/c/Users/winda/OneDrive/Trabajo/respaldos
else
echo 'opcion no encontrada'
exit
fi
```






