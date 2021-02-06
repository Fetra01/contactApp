import React from 'react';
import ContactList from './Components/ContactList';
import Header from './interface/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
