import React, { useState } from 'react';
import './App.css';
import { List } from './List';
const entries = Array.from({length: 200}, (_, index) => ({ value: `${Math.floor(Math.random()*2000)}`, id: index}));

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" onChange={(event) => setSearchTerm(event.target.value)}/>
      <List entries={entries.filter(entry => entry.value.includes(searchTerm))}/>
    </div>
  );
}

export default App;
