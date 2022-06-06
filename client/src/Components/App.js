import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { PageWrapper } from "./GlobalStyles";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Friends from "./Friends";
import NavBar from "./NavBar";
import Error from "./Error";
import About from "./About";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />

    <NavBar />
    <Routes>
      <Fragment>
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
        <Route exact path="/error" element={<Error />} />
      </Fragment>
    </Routes>
    </BrowserRouter>
  );
}

export default App;