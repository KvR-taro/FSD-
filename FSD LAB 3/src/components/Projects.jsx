import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack e-commerce solution with React and Node.js.',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Interactive data visualization dashboard using Chart.js.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Bootstrap', 'Chart.js']
    },
    {
      title: 'Social App',
      desc: 'Real-time social media application with WebSockets.',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Express', 'Socket.io']
    }
  ];

  return (
    <section id="projects" className="py-5 bg-white min-vh-100 pb-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Featured Projects</h2>
          <div className="heading-underline mx-auto mt-3 mb-4"></div>
          <p className="lead text-muted">Here are some of my recent works</p>
        </div>
        
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col lg={4} md={6} key={idx}>
              <Card className="h-100 project-card border-0 shadow-sm">
                <div className="card-img-wrapper overflow-hidden">
                  <Card.Img variant="top" src={project.img} className="project-img" />
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold fs-4 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {project.desc}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge bg="light" text="dark" className="border px-3 py-2 tag-badge" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
