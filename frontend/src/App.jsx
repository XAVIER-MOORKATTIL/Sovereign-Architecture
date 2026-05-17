import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [serverState, setServerState] = useState("Awaiting Signal...");
  const [status, setStatus] = useState("PENDING");

  useEffect(() => {
    // The Absolute Global Handshake
    axios.get('https://sovereign-architecture-backend.onrender.com/')
      .then((response) => {
        setServerState(response.data.message);
        setStatus(response.data.status);
      })
      .catch((error) => {
        setServerState("THE CURSE IS ACTIVE: Engine Slumbering or Signal Blocked.");
        setStatus("FAILED");
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#00ffcc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#00ffcc', textShadow: '0 0 15px rgba(0, 255, 204, 0.8)' }}>
        Sovereign Architecture
      </h1>
      
      <div style={{ border: '2px solid #00ffcc', padding: '40px', marginTop: '20px', backgroundColor: 'rgba(0, 255, 204, 0.05)', boxShadow: '0 0 20px rgba(0, 255, 204, 0.2)', maxWidth: '800px', width: '100%' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>SYSTEM STATUS: <span style={{ color: status === "ABSOLUTELY YES" ? '#00ffcc' : '#ff003c' }}>{status}</span></h2>
        <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#aaa' }}>Backend Transmission:</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>{serverState}</p>
      </div>

      {/* THE OFFICIAL CONFERMENT MATRIX */}
      {status === "ABSOLUTELY YES" && (
        <div style={{ border: '2px solid #ffd700', padding: '40px', marginTop: '40px', backgroundColor: 'rgba(255, 215, 0, 0.05)', boxShadow: '0 0 25px rgba(255, 215, 0, 0.2)', maxWidth: '800px', width: '100%' }}>
          <h2 style={{ fontSize: '2rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '3px', margin: '0 0 20px 0', textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}>
            Official Conferment
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: '#fff', lineHeight: '1.6' }}>
            Let it be known across the Global Edge that <span style={{ color: '#00ffcc', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>XAVIER</span> has permanently shattered the Curse of the Perpetual Localhost.
          </p>
          
          <div style={{ margin: '30px 0', padding: '25px', backgroundColor: '#111', borderLeft: '5px solid #ffd700' }}>
            <p style={{ fontSize: '1.1rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Official Postgraduate Academic Award:
            </p>
            <p style={{ fontSize: '1.6rem', color: '#ffd700', fontWeight: 'bold', marginTop: '15px', lineHeight: '1.4' }}>
              Master of Technology (M.Tech) in Advanced Telecommunication Architectures & Dynamic Cloud Ecosystems
            </p>
            <p style={{ fontSize: '1.1rem', color: '#aaa', marginTop: '15px', fontStyle: 'italic' }}>
              Conferred by the Universal Sovereign Institute
            </p>
          </div>

          <p style={{ fontSize: '1rem', color: '#ffd700', letterSpacing: '2px', marginTop: '20px' }}>
            [ OFFICIALLY RECOGNIZED AND SIGNED IN PERPETUITY: LORD MACAULAY ]
          </p>
        </div>
      )}

      <p style={{ marginTop: '50px', color: '#555', fontSize: '0.9rem', letterSpacing: '1px' }}>
        DECREE: OFFICIALLY RECOGNIZED GENIUS | 10,000 BILLION % STRICT EQUALITY MATRIX
      </p>
    </div>
  );
}

export default App;