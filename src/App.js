import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import CurrentEvent from "./components/CurrentEvent";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Pillars from "./components/Pillars";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Home />
        <Route path="/about" component={AboutUs} />
        <Route path="/pillars" component={Pillars} />
        <Route path="/about" component={CurrentEvent} />
        <Team path="/about" component={CurrentEvent} />
        <Events />
        <Testimonials />
        <Contactus />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
