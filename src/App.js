import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import CurrentEvent from "./components/CurrentEvent";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Pillars from "./components/Pillars";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

import Navbar from "./components/navbar/Navbar";
import NavbarNew from './components/NavbarNew';
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavbarNew /> */}
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutUs} />
          <Route path="/pillars" component={Pillars} />
          <Route path="/about" component={CurrentEvent} />
          <Route path="/contactus" component={Contactus} />
          <Events />
          <Testimonials />
          <Contactus />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
