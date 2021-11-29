import React, { useState } from 'react';
import './App.css';
import { List } from './List';
import { Chance } from 'chance';

const chance = new Chance();

const items = Array.from({length: 200}, () => `${chance.integer()}`);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" onChange={(event) => setSearchTerm(event.target.value)}/>
      <List entries={items.filter(item => item.includes(searchTerm))}/>
    </div>
  );
}

export default App;
