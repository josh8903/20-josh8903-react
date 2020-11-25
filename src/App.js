import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Josh Thorngren</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="https://github.com/josh8903" target="_blank">
                  GitHub
                </Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/joshua-thorngren-3ab1551b6/"
                  target="_blank"
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
            <Route exact path="/resume" component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
