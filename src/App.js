import React from "react";
import Contact from "./components/Contact.js";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <Contact
        image="https://randomuser.me/api/portraits/women/4.jpg"
        userName="Joa Black"
        status="online"
      />
      <Contact
        image="https://randomuser.me/api/portraits/men/47.jpg"
        userName="Leo Mills"
        status="offline"
      />
      <Contact
        image="https://randomuser.me/api/portraits/women/12.jpg"
        userName="Edith Kelly"
        status="online"
      />
      <ContactList />
    </div>
  );
}

export default App;
