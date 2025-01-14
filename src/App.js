import './App.css';
import NavBar from './Components/js/NavBar.js'
import Home from './Components/js/Home.js'
import About from './Components/js/About.js'
import Experience from './Components/js/Experience.js'
import Footer from './Components/js/Footer.js'
import Math from './Components/js/Math.js'
import Lifestyle from './Components/js/Lifestyle.js'
import MathPost from './Components/js/MathPost.js'
import LifestylePost from './Components/js/LifestylePost.js';
// import MathPost from './Components/js/MathPost.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router basename="/sarahbentley">
      <div className='App-container'>
        {/* Conditional render NavBar based on the route */}
        <Route
          render={({ location }) =>
            location.pathname !== '/' && <NavBar />
          }
        />
        
        <div className="Switch-container">
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={About} path="/about" />
            <Route exact component={Experience} path="/experience" />
            <Route exact component={Math} path="/math_cs" />
            <Route exact component={Lifestyle} path="/lifestyle" />
            <Route exact component={LifestylePost} path="/lifestyle/:id" />
            <Route component={MathPost} path="/math/:id" />
            {/* <Route component={MathPost} path="/math_cs/:id" /> Dynamic route for blog posts */}
          </Switch>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}
