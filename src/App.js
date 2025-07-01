import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the value from the input field
  const [name, setName] = useState('');
  
  // State to hold the greeting message to be displayed
  const [greeting, setGreeting] = useState('');

  // Function to handle the button click
  const handleGreet = () => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting('Please enter your name.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Greeting</h1>
        
        {/* Input field for the user's name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        
        {/* Button to trigger the greeting */}
        <button 
          onClick={handleGreet}
          style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#61dafb', cursor: 'pointer' }}
        >
          Say Hello
        </button>
        
        {/* Area to display the generated greeting */}
        {greeting && (
          <h2 style={{ marginTop: '20px' }}>
            {greeting}
          </h2>
        )}
      </header>
    </div>
  );
}

export default App;
