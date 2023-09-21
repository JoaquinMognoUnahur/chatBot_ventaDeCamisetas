import React, { useState } from 'react';
import Message from './message';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Lógica para que el bot responda
      const botResponse = getBotResponse(inputMessage); // Llama a una función para obtener la respuesta del bot

      // Agrega la pregunta del usuario y la respuesta del bot al historial de mensajes
      const userMessage = { text: inputMessage, type: 'user' };
      const botMessage = { text: botResponse, type: 'bot' };

      setMessages([...messages, userMessage, botMessage]);

      // Limpia el campo de entrada
      setInputMessage('');
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Función para obtener la respuesta del bot
  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
  
    if (lowerCaseMessage === 'hola' || lowerCaseMessage === 'buen dia' || lowerCaseMessage === 'holaa') {
      return 'Hola! Bienvenido a Camisetas Coco! ¿En qué podemos ayudarte?';
    } else if (lowerCaseMessage === 'cuál es tu página?' || lowerCaseMessage === 'cuál es tu página?' || lowerCaseMessage === 'Cómo es tu página?' || lowerCaseMessage === 'cual es tu pagina?') {
      return 'Tengo un bot en telegram, el cual podrás consultarme lo que desees. Te paso mi link: https://t.me/CamisetasCoco_bot';
    } else {
      return `Bot: Has dicho "${userMessage}"`; // Respuesta por defecto del bot
    }
  };
  

  return (
    <div className="chatbot">
      <header className="chatbot-header">
        <h1>Camisetas Coco Bot</h1>
      </header>
      <div className="message-container">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            type={message.type}
          />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress} // Agrega este manejador para la tecla "Enter"
        />
        <button className="send-button" onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
