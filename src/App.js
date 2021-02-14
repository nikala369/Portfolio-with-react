import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import Mywork from './components/pages/MyWorkPage/Mywork';
import Experience from './components/pages/ExperiencePage/Experience';
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Portfolio-with-react" exact component={Home} />
        <Route path="/Experience" component={Experience} />
        <Route path="/My-work" component={Mywork} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
