import React from 'react';
import './App.css';
import { FilterableList } from '../FilterableList/FilterableList';
import { Header } from '../Header/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <FilterableList/>
    </div>
  );
}

export default App;
