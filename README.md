# discord_scrap_messages
Modulo de Node.js para obtener todos los mensajes de un canal en formato JSON. <br/>
Node.js module to get all the messages from a Discord channel in JSON format.

## Uso
- Definir una variable de entorno DISCORD_AUTH con el valor de "authorization" que se obtiene de los headers. <br/>
`DISCORD_AUTH=xxxxxxxxxxxxx`
- Instalar las dependencias: <br/>
`node i `
- Correr el script con node para ver la información en consola: <br/>
`node scrapMessages.js <CHANNEL_ID>`

## OPCIONAL
- Agregar el argumento --export al final del comando para generar un .csv con los datos de fecha y hora, nombre de usuario y contenido del mensaje: <br/>
`node scrapMessages.js <CHANNEL_ID> --export`

