// App.js
import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function App() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('');
  const [systemParam, setSystemParam] = useState('');
  const [outputParam, setOutputParam] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      query,
      role,
      system_param: systemParam,
      output_param: outputParam,
    };

    const res = await axios.post('http://localhost:5000/api', params);
    setResponse(res.data);
  };

  return (
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
    <h1 style={{ textAlign: 'center' }}>Application Knowledge App</h1>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <label>
        Query:
        <input type="text" size="200" value={query} onChange={e => setQuery(e.target.value)} placeholder="Query" style={{ width: '100%', padding: '10px' }} />
      </label>
      <label>
        Role:
        <select value={role} onChange={e => setRole(e.target.value)} style={{ width: '100%', padding: '10px' }}>
          <option value="Business">Business</option>
          <option value="Technical">Technical</option>
          <option value="Admin">Admin</option>
        </select>
      </label>
      <label>
        System Param:
        <input type="text" value={systemParam} onChange={e => setSystemParam(e.target.value)} placeholder="System Param" style={{ width: '100%', padding: '10px' }} />
      </label>
      <button type="submit" style={{ padding: '10px', width: '100px' }}>Submit</button>
        <br />
        <br />
        <label>
          Output :
          <input type="text" value={outputParam} onChange={e => setOutputParam(e.target.value)} placeholder="Output Param" />
        </label>
        <br />
       
      </form>
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
