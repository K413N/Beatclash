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
import Forums from "./Forums";
import ChatComponent from "./Components/ChatComponent";
import Thread from "./Thread";

// Used for Routing

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />

    <NavBar />
    <ChatComponent />
    <Routes>
      <Fragment>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/forums/:boardid" element={<Forums />} />
        <Route exact path="/forums/:boardid/:threadtitle" element={<Thread />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/rules" element={<Rules />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/profile/:profileid" element={<Profile />} />
        <Route exact path="/error" element={<Error />} />
      </Fragment>
    </Routes>
    </BrowserRouter>
  );
}

export default App;