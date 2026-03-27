import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Get In Touch</h2>
            <p className="lead text-secondary px-md-5">
              Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="bg-white text-dark shadow-lg border-0 rounded-4 contact-card">
              <Card.Body className="p-5">
                <Form>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" className="py-2" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className="py-2" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                  </Form.Group>

                  <Button variant="primary" type="button" size="lg" className="w-100 py-3 fw-bold shadow">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
