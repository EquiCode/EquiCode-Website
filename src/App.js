import Home from "./components/Home";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Home />
      <div>EquiCode</div>
    </div>
    </Router>
  );
}

export default App;
