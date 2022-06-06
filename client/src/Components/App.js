import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { PageWrapper } from "./GlobalStyles";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Friends from "./Friends";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <PageWrapper>
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
      </PageWrapper>
    </Routes>
    </BrowserRouter>
  );
}

export default App;