import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import SideMenuBar from "../SideMenuBar";
import Dashboard from "../Dashboard/DashBoard";
import Pick from "../Pick";
import PickDetail from "../Pick/PickDetail";
import Fun from "../Fun";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    svg {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
    svg {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    svg {
      font-size: 1.2rem;
    }
  }
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function Home({ match }) {
  // useEffect(() => {
  //   setPieOptions((options) => ({
  //     ...options,
  //     series: [{ data: 14, name: "hi" }],
  //     labels:[]
  //   }));

  // }, []);

  return (
    <>
      <Container>
        <SideMenuBar />
      </Container>
      <Router>
        <Switch>
          <Route path={match.path} exact component={Dashboard} />
          <Route path={`${match.path}/pick`} exact component={Pick} />
          <Route path={`${match.path}/pick/:id`} component={PickDetail} />
          <Route path={`${match.path}/fun`} component={Fun} />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
