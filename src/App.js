import GlobalStyles from "./GolbalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Swap from "./Swap";
import Home from "./Home";
import Ready from "./Ready";
import Choice from "./Choice";
import Result from "./Result";
import ResultAll from "./ResultAll";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Swap /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fun" component={Swap} />
          <Route path="/my" component={Swap} />
          <Route path="/ready" exact component={Ready} />
          <Route path="/ready/swap" component={Swap} />
          <Route path="/ready/choice" component={Choice} />
          <Route path="/result" component={Result} />
          <Route path="/resultAll" component={ResultAll} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
