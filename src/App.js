import React from 'react';
import './Style/main.css';
import './Style/service.css';
import './Style/about.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
     <React.Fragment>
        <Route path="/" exact component={Home} />
       <Route path="/home"  component={Home} />
       <Route path="/service" component={Service} />
       <Route path="/about" component={About} /> 
     </React.Fragment>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
