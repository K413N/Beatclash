import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Fragment } from "react";
import Homepage from "./Homepage";
import Login from "./Components/Login";
import Profile from "./Profile";
import Friends from "./Friends";
import NavBar from "./Components/NavBar";
import Error from "./Error";
import About from "./About";
import Rules from "./Rules";
import FAQ from "./FAQ";
import News from "./News";
import Forum from "./Forum";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />

    <NavBar />
    <Routes>
      <Fragment>
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/rules" element={<Rules />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
        <Route exact path="/error" element={<Error />} />
      </Fragment>
    </Routes>
    </BrowserRouter>
  );
}

export default App;