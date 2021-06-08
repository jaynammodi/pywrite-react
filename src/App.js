import "./styles.css";
import "./media.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TandC from "./components/TandC";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/termsandconditions" component={TandC} />
      </Switch>
    </div>
  );
}
