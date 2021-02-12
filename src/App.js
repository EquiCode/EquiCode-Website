import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// import Home from "./components/Home";
// import AboutUs from "./components/Aboutus";
// import Contactus from "./components/Contactus";

import Events from "./components/Events";
import Footer from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import Team from "./pages/Team";
// import Testimonials from "./components/Testimonials";
// import Sponsors from "./components/Sponsors";

import NavbarNew from "./components/NavbarNew";

import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <NavbarNew />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route path="/contactus" component={Contactus} /> */}
          <Route exact path="/events" component={Events} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/volunteer" component={Volunteer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
