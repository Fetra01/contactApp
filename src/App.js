import React from 'react';
import ContactAdd from './Components/ContactAdd';
import ContactEdit from './Components/ContactEdit';
import ContactList from './Components/ContactList';
import Header from './interface/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ContactList} />
              <Route exact path="/contacts" component={ContactList} />
              <Route exact path="/contacts/ajouter-contact" component={ContactAdd} />
              <Route exact path="/contacts/modifier-contact/:id" component={ContactEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
