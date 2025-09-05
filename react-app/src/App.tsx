import logo from './logo.svg';
import './App.css';
import socket from './socketConnection';
import { useEffect, useState } from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  useEffect(() => {
    // Connection state
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // Example custom event from server
    socket.on('welcome', (msg: string) => {
      setServerMessage(msg);
    });

    // Cleanup listeners
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('welcome');
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Socket status:{' '}
          <strong style={{ color: isConnected ? 'lightgreen' : 'red' }}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </strong>
        </p>

        {serverMessage && <p>Message from server: {serverMessage}</p>}
      </header>
    </div>
  );
}

export default App;
