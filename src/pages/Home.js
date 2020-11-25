import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card body style={{ marginTop: "80px" }}>
            <h3>
              I'm a junior web developer living in Minneapolis with over a
              decade of experience in business management and customer service.
            </h3>
            <h4>
              For the past 15 years I have been working on team building,
              problem solving, and streamlining business operations in retail
              environments. I have profitably managed several self-storage and
              truck share retail facilities throughout the Twin Cities. Through
              my career, I have grown to excel at rapid adaptation, customer
              relations, and user experience.
            </h4>
            <h3>So, how can I help you today?</h3>
            <h4>
              I am currently training to become certified as a full stack web
              developer at the University of Minnesota, to be completed December
              2020. I am seeking employment where I can hone my new skills, and
              utilize my experience in business and personnel management alike.
            </h4>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
