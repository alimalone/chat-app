import React from 'react';
import ContactList from './components/ContactList'
import './App.css';
/*import Contact from './components/Contact'*/



function App() {
  return (
    <div className="App">
    <ContactList/>
    </div>
  );
}

export default App;


/*Quête précédente

<Contact name="Joa Black" 
             avatar="https://randomuser.me/api/portraits/women/4.jpg"
             status/>
    <Contact name="Leo Mills"
             avatar="https://randomuser.me/api/portraits/men/47.jpg"/>
    <Contact name="Edith Kelly"
             avatar="https://randomuser.me/api/portraits/women/12.jpg"
             status/>*/
