import React from 'react';
import Liste from './Components/Liste';
import Header from './interface/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Liste />
      </div>
    </div>
  );
}

export default App;
