import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="bg-light py-5 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill shadow-sm">
              <i className="bi bi-rocket-takeoff me-2"></i>
              Available for Hire
            </Badge>
            <h1 className="display-3 fw-bolder mb-4 text-dark hero-title">
              Building Digital <span className="text-primary">Experiences</span>
            </h1>
            <p className="lead text-muted mb-5 px-md-5">
              I am a Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" size="lg" href="#projects" className="px-5 shadow hero-btn">
                View My Work
              </Button>
              <Button variant="outline-dark" size="lg" href="#contact" className="px-5 hero-btn-outline">
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
