import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import PropertyPage from './components/propertyPage/propertyPage'; // Import your PropertyPage component

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/property" component={PropertyPage} /> {/* Add this line */}
    </Router>
  );
}

export default App;