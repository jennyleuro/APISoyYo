# PRUEBA TÉCNICA SoyYo
# Descripción
API que retorna listado de entidades dentro de un rango, ordenadas alfabéticamente, con sus propiedades

# Índice
1. Instalación de dependencias
2. Ejecución
3. Funciones principales
4. Versión Node

# 1. Instalacion de dependencias
Es necesario instalar las dependencias incluidas en el archivo package.json por lo cual se debe correr el siguiente código en consola
```bash
npm i
```
Así se instalarán las siguientes dependencias, en sus respectivas versiones:
- chai: 4.2.0
- env-cmd: 10.0.1
- mocha: 5.2.0
- node-fetch: 2.6.1
- nodemon: 2.0.15
- nyc: 14.1.1
- cors: 2.8.5
- express: 4.17.1


# 2. Ejecución
Para ejecutar la API se debe correr el siguiente código en consola:
```bash
nodemon app
```

## 2.1 Request
`GET localhost:3030/entities`
Para el uso de este servicio será necesario enviar el rango de códigos de las entidades de las cuales se desea conocer sus propiedades en el Body.
`json
{
    "startId": number,
    "endId": number
} 
`
## 2.2 Response
`200`
En caso de éxito se retornarán las entidades cuyo Id se encuentre dentro del rango establecido, ordenadas afabéticamente según su nombre de forma ascendente.

#### Ejemplo:
```bash
{
    "entitiesRes": [
        {
            "entityId": 2,
            "name": "Bancolombia",
            "identificationNumber": "987654321",
            "expirationDate": "2030-10-27",
            "contactName": "Mauricio Serna Florez",
            "contactMail": "msflore@bancolombia.com.co",
            "ipAddress": "",
            "logo": ""
        },
        {
            "entityId": 6,
            "name": "Creditek",
            "identificationNumber": "123409876",
            "expirationDate": "2030-10-27",
            "contactName": "Angélica Loboguerrero",
            "contactMail": "angelica@soyyo.co",
            "ipAddress": "",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_creditk.png"
        },
        {
            "entityId": 9,
            "name": "Creditek",
            "identificationNumber": "123456789",
            "expirationDate": "2030-10-27",
            "contactName": "Angélica Loboguerrero",
            "contactMail": "angelica@soyyo.co",
            "ipAddress": "urlCreditek",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_creditk.png"
        },
        {
            "entityId": 8,
            "name": "Entidad Demo",
            "identificationNumber": "123409876",
            "expirationDate": "2030-10-27",
            "contactName": "Contacto DEMO",
            "contactMail": "contacto@demo.com.co",
            "ipAddress": "urlMiAguila",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_demo.png"
        },
        {
            "entityId": 3,
            "name": "Mi Aguila",
            "identificationNumber": "9008508671",
            "expirationDate": "2030-10-27",
            "contactName": "Contacto Mi Aguila",
            "contactMail": "contacto@miaguila.com.co",
            "ipAddress": "",
            "logo": ""
        },
        {
            "entityId": 4,
            "name": "Seguros Continental",
            "identificationNumber": "123409876",
            "expirationDate": "2030-10-27",
            "contactName": "Contacto Demo",
            "contactMail": "contacto@demo.com.co",
            "ipAddress": "",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_seguros_continental.png"
        },
        {
            "entityId": 5,
            "name": "SoyYo",
            "identificationNumber": "123409876",
            "expirationDate": "2030-10-27",
            "contactName": "Angélica Loboguerrero",
            "contactMail": "angelica@soyyo.co",
            "ipAddress": "",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_soyyo.png"
        },
        {
            "entityId": 7,
            "name": "Sufi Bancolombia",
            "identificationNumber": "8909039388",
            "expirationDate": "2030-10-27",
            "contactName": "Karen Montoya Vanegas",
            "contactMail": "karmonto@bancolombia.com.co",
            "ipAddress": "",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_creditk.png"
        },
        {
            "entityId": 10,
            "name": "Tuya",
            "identificationNumber": "123456789",
            "expirationDate": "2030-10-13",
            "contactName": "Ana Maria Palacio",
            "contactMail": "APalacioH@tuya.com.co",
            "ipAddress": "urlTuya",
            "logo": "https://soyyo-dev-entity-logos.s3.amazonaws.com/logo_entidad_soyyo.png"
        }
    ]
}
```
`404`
En caso de no existir alguno o varios de los registros en el rango establecido se retornará un mensaje de error:
```bash
{
    "Error:": " No existe alguno o varios de los registros del rango"
}
```
`400`
En caso de no ingresar data en Body o data errónea se retornará un mensaje de error:
```bash
{
    "Error:": "Error en validación datos de entrada"
}
```

# 3. Funciones principales
- ##### resAsync: 
Función dentro del módulo fetch. Permite el consumo de la API donde se encuentra la información de las entidades.
- ##### range:
Función dentro del módulo entitiesListHandler en la cual se obtienen las entidades que se encuentran dentro del rango establecido, mediante un ciclo for.
- ##### orderByName:
Función dentro del módulo entitiesListHandler en la cual se ordenan las entidades de forma ascendente según su nombre, con el uso de un sort.

# 4. Versión
- NodeJS 16.13.0