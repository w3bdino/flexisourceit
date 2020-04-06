import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListingPage from './pages/listing.page';
import ListingDetailPage from './pages/people.detail.page';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ ListingPage } />
          <Route path="/detail/:slug" component={ ListingDetailPage } />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
