import React from 'react';
import './App.css';
import { FilterableList } from './FilterableList';
import { Header } from './Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <FilterableList/>
    </div>
  );
}

export default App;
