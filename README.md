# Servicio Windows en NodeJs

Proyecto en NodeJs que instala un Servicio de Windows.
Se trata de una prueba que mueve archivos de una Carpeta a otra. Pero puede ser escalado fácilmente.

## Para Iniciar

Para comenzar a crear un servicio de Windows en Node.js se utiliza una biblioteca llamada "node-windows". Esta biblioteca permite crear y administrar servicios de Windows.

### 1. Inicializar proyecto

NodeJs Instalado

```
npm init -y
```

### 2. Instalar "node-windows"

```
npm install node-windows --save
```

### 3. Crear un nuevo Archivo .js y codificar

### 4. Instalar servicio (Ejecutar el código)

Ejecuta el archivo JavaScript utilizando Node. Esto instalará y ejecutará el servicio en el sistema.

```
node my-service.js
```

Una vez que hayas ejecutado este código, el servicio de Windows se habr Instalado y se ejecutará como un servicio en segundo plano. Puedes administrar el servicio utilizando las herramientas estándar de Windows para administrar servicios.


## Instalar en otra maquina

Para instalar y ejecutar el servicio de Windows en otra máquina, deberás hacer esto:

### 1. Mover todo el proyecto
### 2. Tener Node instalado
### 3. Instalar dependencias

Abre una terminal en el directorio donde tienes los archivos del servicio.

```
npm install node-windows
```
ó bien puedes ejecutar este otro comando en caso de que las dependencias sean muchas.

```
npm install
```

### 4. Ejecutar el código

Abre una terminal en el directorio donde se encuentra el archivo JavaScript del servicio y ejecuta el siguiente comando:

```
node my-service.js
```
Una vez que hayas ejecutado este código, el servicio de Windows se habr Instalado y se ejecutará como un servicio en segundo plano. Puedes administrar el servicio utilizando las herramientas estándar de Windows para administrar servicios.

***

## Para desinstalar un servicio de Windows

### 1. Crear un archivo .js nuevo
### 2. Editar el nombre y la ubicacion del archivo y servicio creados
### 3. Ejecutar el código

Abre una terminal en el directorio donde se encuentra el archivo JavaScript del servicio y ejecuta el siguiente comando:

```
node unistall-service.js
```


# Datos extras

Si el código contiene un setInterval y está diseñado para ser ejecutado como un servicio de Windows utilizando la biblioteca "node-windows", no es necesario mantener la consola abierta después de haber instalado el servicio. Una vez que se haya instalado el servicio, este continuará ejecutándose en segundo plano según la lógica y el intervalo que se haya definido, incluso si se cierra la consola.

Cuando se configura un servicio de Windows utilizando "node-windows", el servicio se registra en el sistema operativo como un proceso de servicio. Esto significa que el servicio se ejecutará en segundo plano independientemente de si hay una consola abierta o no.

Por lo tanto, después de haber instalado el servicio correctamente, se puede cerrar la consola sin afectar la ejecución continua del servicio. Se puede administrar y monitorear el servicio utilizando las herramientas estándar de Windows para administrar servicios, como el "Administrador de servicios".