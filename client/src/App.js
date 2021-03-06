import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import Friends from "./UserPage";
import NavBar from "./Components/NavBar";
import Error from "./Error";
import About from "./About";
import Rules from "./Rules";
import FAQ from "./FAQ";
import News from "./News";
import Forums from "./Forums";
import ChatComponent from "./Components/ChatComponent";
import Thread from "./Thread";
import { useAuth0 } from "@auth0/auth0-react";
import EditProfile from "./EditProfile";
import SearchResults from "./SearchResults";

// Used for Routing

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <BrowserRouter>
      <GlobalStyles />

      <NavBar />
      {isAuthenticated && (
        <>
          <ChatComponent />
        </>
      )}
      <Switch>
      <Route exact path="/search/:searchId"><SearchResults /></Route>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/forums/:boardId"><Forums /></Route>
          <Route exact path="/forums/:boardId/:threadId"><Thread /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/faq"><FAQ /></Route>
          <Route exact path="/rules"><Rules /></Route>
          <Route exact path="/news"><News /></Route>
          <Route exact path="/users"><Friends /></Route>
          <Route exact path="/profile/:profileId"><Profile /></Route>
          <Route path="/edit-profile"><EditProfile /></Route>
          <Route path=""><Error /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
