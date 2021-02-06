import React from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Header from './interface/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/accueil" component={ContactList} />
            <Route exact path="/ajouter" component={ContactForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
