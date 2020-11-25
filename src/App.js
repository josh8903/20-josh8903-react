import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <div>
        <StoreProvider>
          <Navbar
            style={{ position: "absolute", zIndex: "2", width: "100vw" }}
            bg="light"
            expand="lg"
          >
            <Navbar.Brand href="/">Josh Thorngren</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link
                  href="https://docs.google.com/document/d/1mRCQPfPvWPs2tTltEeZwVesQkkAVmrLJeO61oM0DrWM/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/josh8903"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/joshua-thorngren-3ab1551b6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Nav.Link>
                <Nav.Link href="mailto:thonrgren87@gmail.com">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/index" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />

            <Route component={NoMatch} />
          </Switch>
          <footer style={{ textAlign: "center" }}>
            Josh Thorngren - Full Stack Developer
            <br />
            <a href="mailto:thonrgren87@gmail.com">thorngren87@gmail.com</a>
          </footer>
        </StoreProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
