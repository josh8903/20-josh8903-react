import React from "react";
import { Card, Carousel } from "react-bootstrap";
import creditcroc from "../assets/img/creditcroc.png";
import eatdaburger from "../assets/img/eatdaburger.png";
import employeedirectory from "../assets/img/employeedirectory.png";
import employeesummary from "../assets/img/employeesummary.png";
import notetaker from "../assets/img/notetaker.png";
import readmegenerator from "../assets/img/readmegenerator.png";

const Portfolio = () => {
  return (
    <Carousel>
      {/* credit croc */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={creditcroc}
          alt="Credit Croc"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>Credit Croc</h3>
            <h5>
              A full stack credit tracking application utilizing JawsDB hosted
              on Heroku. Built using the ORM model utilizing Handlebars.js to
              display information from the database with Highcharts integrtion.
            </h5>
            <p>
              <a
                href="https://hungry-croconaw.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/coryjquirk/credit-croc"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      {/* eat da burger */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={eatdaburger}
          alt="Eat-da-burger!"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>EAT-DA-BURGER!</h3>
            <h5>
              A simple full stack application utilizing a CRUD enabled ORM model
              to manipulate a MySQL database hosted on Heroku via JawsDB.
            </h5>
            <p>
              <a
                href="https://frozen-ocean-63424.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/josh8903/13-eat-da-burger"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      {/* employee directory */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={employeedirectory}
          alt="Employee directory"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>React Employee Tracker</h3>
            <h5>
              A simple employee directory app built with React! This app is
              setup to fetch a random set of 200 generated employees from
              randomuser.me and seemlessly render data on the fly using stately
              React components!
            </h5>
            <p>
              <a
                href="https://rad-19.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/josh8903/19-react-employee-directory"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      {/* employee summary */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={employeesummary}
          alt="Employee Summary"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>Employee Summary</h3>
            <h5>
              A simple Node CLI app that quickly generates a HTML UI for your
              work group!
            </h5>
            <p>
              <a
                href="https://drive.google.com/file/d/187qg7NQSln1854Wzbe7FeOnGvcdvUyIG/view"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>{" "}
              |
              <a
                href="https://github.com/josh8903/10-employee-summary"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      {/* note taker */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={notetaker}
          alt="Note Taker"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>Note Taker</h3>
            <h5>
              A simple note taker app utilizing an express backend to save and
              retrieve note data from a JSON file.
            </h5>
            <p>
              <a
                href="https://aqueous-harbor-69317.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/josh8903/11-note-taker"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      {/* redme generator */}
      <Carousel.Item
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        interval={3000}
      >
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1440px",
            height: "100vh",
            marginTop: "-382px" /* Half the height */,
            marginLeft: "-720px" /* Half the width */,
          }}
          src={readmegenerator}
          alt="README Generator"
        />
        <Carousel.Caption>
          <Card body style={{ backgroundColor: "black", opacity: "80%" }}>
            <h3>README Generator</h3>
            <h5>
              A simple node application that quickly creates professional README
              files!
            </h5>
            <p>
              <a
                href="https://drive.google.com/file/d/1AXCfSndplBnWJAYTeOVmJDKFjTnmEzZi/view"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>{" "}
              |
              <a
                href="https://github.com/josh8903/09-readme-generator"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Portfolio;
