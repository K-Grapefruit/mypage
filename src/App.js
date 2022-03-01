import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Detail } from "./routes/Detail";
import { Home } from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/info">
          <Detail></Detail>
        </Route>
        <Route exact path={["/", "/detail/:id"]}>
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
