# discord_scrap_messages
Modulo de Node.js para obtener todos los mensajes de un canal en formato JSON. <br/>
Node.js module to get all the messages from a Discord channel in JSON format.

## Uso
-Definir una variable de entorno DISCORD_AUTH con el valor de "authorization" que se obtiene de los headers. <br/>
DISCORD_AUTH=xxxxxxxxxxxxx<br/>
-Importar la función <br/>
import {getChannelMessages} from 'getChannelMessages.mjs' <br/>
getChannelMessages(channel_id)

