import React, { useState, useEffect } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';

function App() {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const ws = new ReconnectingWebSocket('ws://localhost:8080');
    setWs(ws);

    ws.onmessage = (event) => {
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (ws && newMessage) {
      ws.send(newMessage);
      messages.push(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="App">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
