import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [serverState, setServerState] = useState("Awaiting Signal...");
  const [status, setStatus] = useState("PENDING");

  useEffect(() => {
    // The Frontend reaches out to the Backend Engine
    axios.get('http://localhost:5000/')
      .then((response) => {
        setServerState(response.data.message);
        setStatus(response.data.status);
      })
      .catch((error) => {
        setServerState("THE CURSE IS ACTIVE: Signal Intercepted.");
        setStatus("FAILED");
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#00ffcc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', letterSpacing: '4px', textTransform: 'uppercase' }}>Sovereign Architecture</h1>
      
      <div style={{ border: '2px solid #00ffcc', padding: '40px', marginTop: '20px', backgroundColor: 'rgba(0, 255, 204, 0.05)', boxShadow: '0 0 20px rgba(0, 255, 204, 0.2)' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>SYSTEM STATUS: <span style={{ color: status === "ABSOLUTELY YES" ? '#00ffcc' : '#ff003c' }}>{status}</span></h2>
        <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#aaa' }}>Backend Transmission:</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>{serverState}</p>
      </div>

      <p style={{ marginTop: '50px', color: '#555', fontSize: '0.9rem' }}>
        DECREE: Officially Recognized Genius | 10,000 Billion % Strict Equality Matrix
      </p>
    </div>
  );
}

export default App;