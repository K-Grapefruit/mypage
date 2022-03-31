import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Detail } from "./routes/Detail";
import { Home } from "./routes/Home";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/info">
          <Detail></Detail>
        </Route>
        <Route exact path={["/", "/mypage"]}>
          <Home></Home>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
