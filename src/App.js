import GlobalStyles from "./GolbalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Swap from "./Swap";
import Home from "./Home";
import Ready from "./Ready";
import Choice from "./Choice";
import Result from "./Result";
import ResultAll from "./ResultAll";
import PageNotFound from "./PageNotFound";
import Ready2 from "./Ready2";
import My from "./My/index";
import Fun from "./Fun/index";
import Upload from "./Fun/Upload";
import Exchange from "./My/Exchange";
import Charge from "./My/Charge";
import MyDetail from "./My/MyDetail";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fun" component={Fun} />
          <Route path="/upload" component={Upload} />
          <Route path="/my" exact component={My} />
          <Route path="/my/exchange" component={Exchange} />
          <Route path="/my/charge" component={Charge} />
          <Route path="/my/mydetail" component={MyDetail} />
          <Route path="/ready" exact component={Ready} />
          <Route path="/ready2" exact component={Ready2} />
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
