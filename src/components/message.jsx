import React from 'react';

function Message({ text, type }) {
  return (
    <div className={`message ${type === 'user' ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
}

export default Message;
