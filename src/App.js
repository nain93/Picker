import GlobalStyles from "./GolbalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Swap from "./Swap";
import Home from "./Home";

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
          <Route path="/swap" component={Swap} />
          {/* <Route component={PageNotfound} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
