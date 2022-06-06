import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { PageWrapper } from "./GlobalStyles";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Friends from "./Friends";
import NavBar from "./NavBar";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />

    <NavBar />
    <Routes>
      <Fragment>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
      </Fragment>
    </Routes>
    </BrowserRouter>
  );
}

export default App;