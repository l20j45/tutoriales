# Curso basico de python desde cero

#### Imprimir pantalla

```python
 print()
```

imprime cosas en consola como:

    mesajes de texto

    variables

    funciones

tambien se puede:

    concatenar y hay tres formas de esto

```python
print("texto" + variable + "texto")
print("texto", varible)
print(f"texto  {variable}") # yo prefiero esta totalmente
```



#### variables

las variables son espacios de memoria reservados donde se pueden guardar valores, estos tienen que tener un identificador, en python no hay definicion de tipo de variable porque es un lenguaje de tipado debil, peero se puede castear los valores.

##### como ver el espacio de memoria de una variable?

```python
# la funcion id nos muestra la direccion den memoria de una variable
print(id(variable))
```

###### Conocer el tipo de variable

para esto se utiliza la funcion type y es muy parecida al tipo de arriba

```python
print(type(variable))
```

##### Reglas para definir una varible

la variable no puede llevar

1. espacios

2. caracteres especiales

3. numeros al inicio

4. palabaras reservadas como nombre
   
   

##### Tipos de datos

![](D:\cursos\tutoriales\python\img\tiposdeDatos.png)

estos son los tipos de datos que existen y corresponden a:



//poner los tipos de valores



posteriormente se pueden setear los tipos de variables como una pista para el desarrolador

```python
x: str = 10
print(x)
print(type(x))
```

##### Ingreso de valores por usuarios

Para ingresar los valores por los usuarios se utiliza la sentencia input(), importante por defecto input agrega datos tipo string, pero podrias castearlo a valores de otro tipo.

```python
variable = input("Cualquier mensaje")
#con casteo
variable = int(intpur("cualquier cosa a numero entero"))
```

#### Operaciones aritmeticas basicas con python

para las operaciones arimeticas se pueden sumar numeros o variables a acontinuacion pongo ejemplos de las mismas

```python
numero1: float = 5
numero2: float = 3
print(f"suma {numero1+numero2}")
print(f"resta {numero1-numero2}")
print(f"multiplicacion {numero1*numero2}")
print(f"divison {numero1/numero2}")
print(f"division entera {numero1//numero2}")
print(f"modulo o residuo de division {numero1%numero2}")
print(f"potencia {numero1**numero2}")
```

##### Operadores condicionales y variables booleanas

en las condicionales quiere decir que se cumple o no cierto caso en el codigo y desdencadena algunas acciones, estas pudiendo ser numericas, o de texto

para ello se utiliza el if y se declara de la siguiente manera

```python
if "condicional":
    accciones
```

importante aqui, todo tiene que estar en identado para que se reconozca parte de el codigo del if.

ejemplos de codigo:

```python
numero: int = int(input("Ingresa un numero: "))
if numero % 2 == 0 :
    print(f"{numero} es un numero par")
else:
    print(f"{numero} no es un numero par")

edad: int = int(input("Proporciona tu edad: "))
if edad >= 18:
    print(f"la persona con {edad} es un adulto")
else:
    print(f"la persona con {edad} es menor de edad")




```

##### agrupadores logicos (and, or y not)

los agrupadores logicos corresponden a cuando queremos tener dos condicionale y deseamos que:

- las dos o mas se cumplan **and**

- solo una de ellas se cumpla **or**

- el caso contrato si se cumple una **not**


