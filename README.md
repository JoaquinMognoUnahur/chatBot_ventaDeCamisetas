### Componente `message.jsx`

El archivo `message.jsx` define un componente de React llamado `Message`. Este componente está diseñado para mostrar mensajes en la interfaz de usuario de manera versátil. Puede representar tanto mensajes de usuario como mensajes del bot y aplica estilos diferentes según el tipo de mensaje.

---

### Componente `chatbot.jsx`

El archivo `chatbot.jsx` crea una elegante interfaz de chat donde los usuarios pueden interactuar y recibir respuestas de un bot simulado. En esta interfaz, los mensajes se organizan en un contenedor y se muestran utilizando el componente `Message`, que se encarga de representar cada mensaje de manera apropiada.

La aplicación proporciona una casilla de entrada de texto para que los usuarios redacten sus mensajes y un botón "Enviar" para transmitir esos mensajes al bot. Todo esto se logra mediante el uso de estados y funciones específicas que gestionan la interacción del usuario y la visualización de los mensajes en la pantalla.

---

### Bot en General

Dentro del bot en general, se pueden acceder a una amplia variedad de funciones entrenadas y personalizadas en DialogFlow. Por ejemplo, si le preguntas al bot "Cuál es tu página?", el bot te proporcionará un enlace directo a su versión de Telegram, donde podrás hacer consultas y obtener respuestas a tus preguntas.

El agente de DialogFlow, llamado "CamisetasCoco-bot," se especializa en la venta de camisetas de equipos de fútbol y selecciones de todo el mundo. Puedes interactuar con él de diversas maneras, como saludarlo, especificar cuántas camisetas deseas, consultar horarios de atención, solicitar un menú o averiguar su ubicación. El bot está diseñado para brindarte información y asistencia en tus consultas relacionadas con la compra de camisetas.

A continuación, detallo algunas preguntas que puedes realizarle al bot de Telegram para que puedas tener una comunicación eficiente:

- `cual es tu pagina?`
- `Cual es tu horario de atención?` / `A qué hora abren`
- `menu` / `muestrame un menu`
- `Me pasarias la direccion?` / `Donde estan ubicados?`
- `quiero <cantidad> camiseta de <equipoCamiseta> en talle <talleCamiseta>` / Ejemplo de uso: `quiero una camiseta de la selección argentina en talle L`. Si no le especificas un parámetro, por ejemplo, el talle, no te preocupes, el bot te lo mencionará.
