import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import SoldiersPage from "./pages/SoldiersPage";
import OneSoldierPage from "./pages/OneSoldierPage";
import NotesPage from "./pages/NotesPage";
import NohehutPage from "./pages/NohehutPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import Cookies from "js-cookie";
import { User } from "./context";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const [user, setUser] = useState(null);

  // const location = useHistory();
  // useEffect(()=>{

  // },[])
  const getRoutes = () => {
    if (!user) {
      console.log("user");
      return (
        <User.Provider value={{ user, setUser }}>
          <ErrorBoundary>
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              )}
            />
          </ErrorBoundary>
        </User.Provider>
      );
    } else {
      return (
        <User.Provider value={{ user, setUser }}>
          <ErrorBoundary>
            <Switch>
              <Route path="/">
                <Navbar />
                <HomePage />
              </Route>
              <Route path="/soldiers" exact>
                <Navbar />
                <SoldiersPage />
              </Route>
              <Route path="/soldier/:soldierId" exact>
                <Navbar />
                <OneSoldierPage />
              </Route>
              <Route path="/notes" exact>
                <Navbar />
                <NotesPage />
              </Route>
              <Route path="/nohehut" exact>
                <Navbar />
                <NohehutPage />
              </Route>
              <Route path="/profile" exact>
                <Navbar />
                <ProfilePage />
              </Route>
            </Switch>
          </ErrorBoundary>
        </User.Provider>
      );
    }
  };
  return (
    <Router>
      <AppContainer>{getRoutes()}</AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: #888;
`;
export default App;
