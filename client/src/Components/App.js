import {BrowserRouter, Switch, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { PageWrapper } from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <PageWrapper>
        <Route exact path="/home">
          <Homepage />
        </Route>
      </PageWrapper>
    </Switch>
    </BrowserRouter>
  );
}

export default App;