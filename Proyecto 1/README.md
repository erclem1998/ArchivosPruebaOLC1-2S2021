# Proyecto 1

En este folder se encontrarán los archivos de prueba .fca y .js correspondientes al proyecto 1 del curso.

### Si se modifica un archivo existente
- Si en dado caso el archivo tenia errores, y por ende las salidas no son las correctas, deberán subir la salida correcta (lista reportes) con el nombre: NombreOriginalDelResultado_Correcion.

### Si agrega archivos de prueba
- Si un estudiante comparte archivos de entrada, deberán crear una carpeta con su número de carnet (Ejemplo: 202112345) y dentro de ella colocar el o los archivos .fca y los proyectos con los archivos .js que se desean compartir, además de colocar las siguientes carpetas con lo resultados esperados:
    - lista de reportes

### Nota:
- En la carpeta Pruebas, se encontrarán los archivos creados por los auxiliares del curso.
- En la carpeta PruebasDeEstudiantes, se encontrarán los archivos creados por los alumnos.
- No se deben subir los archivos .dot que se generan, unicamente los archivos .jpg, .png, entre otros tipos de imagen.
- Si una person con carnet 202112345 comparte archivos de prueba, la estructura de su carpet sería (dentro de la carpeta PruebasDeEstudiantes):
    - 202112345
        - archivo.fca
        - lista reportes

# Nota: Aun se está construyendo la sección de proyecto 1

# SE HA COMPARTIDO UN EJEMPLO PARA EL CALCULO DEL PUNTAJE GENERAL
Ver archivo adjunto llamado "Guía calculo de puntaje general.xlsx"

# IMPORTANTE PARA CÁLCULO DE PUNTAJE DE METODOS
Evaluando el cálculo del puntaje de los métodos, hemos llegado a un acuerdo para facilitarles el cálculo de esta métrica.

Por lo tanto, se procederá de la siguiente manera:

Si ambos ID (nombre de los métodos) son iguales:
- verifica cantidad de parámetros
- verifica cantidad de líneas

Si ambos ID (nombre de los métodos) son diferentes:
- verifica cantidad de líneas
- si ID's diferentes y cantidad de líneas igual, verifica cantidad de parámetros

Para ambos casos, cuando hace el primer match, ya no debe comparar con el resto de métodos.