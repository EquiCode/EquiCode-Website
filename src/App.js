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
import Sponsors from "./components/Sponsors";

import NavbarNew from "./components/NavbarNew";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavbarNew />
      {/* <NavbarNew /> */}
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <Pillars />
      <Events />
      <Contactus />
      <Testimonials />
      <Sponsors />
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/about" component={AboutUs} />

          <Route path="/pillars" component={Pillars} />
          <Route path="/current" component={CurrentEvent} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/events" component={Events} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/footer" component={Footer} />
          <Route path="/team" component={Team} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
