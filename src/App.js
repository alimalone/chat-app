import React from 'react';

import './App.css';
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
    <Contact name="Joa Black" 
             avatar="https://randomuser.me/api/portraits/women/4.jpg"
             status/>
    <Contact name="Leo Mills"
             avatar="https://randomuser.me/api/portraits/men/47.jpg"/>
    <Contact name="Edith Kelly"
             avatar="https://randomuser.me/api/portraits/women/12.jpg"
             status/>
    </div>
  );
}

export default App;
