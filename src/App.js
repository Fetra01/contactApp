import React from 'react';
import Contact from './Components/Contact';
import Header from './interface/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
