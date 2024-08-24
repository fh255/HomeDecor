import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import styles from "../../styles/About.module.css";

const About = () => {  // Renamed from "Info" to "About"
  return (
    <Container className={`${appStyles.Content} ${styles.InfoContent} p-5 mt-4`}>
      <Row>
        <Col>
          <div className='d-flex justify-content-center'>
            <h3>HomeDecor: Transform Your Space</h3>
          </div>
          <hr />
          <div className='text-center'>
            <i className="fas fa-home"></i>
            <p>Welcome to HomeDecor, your one-stop destination for stylish and affordable home decor ideas!</p>
            <p>Are you ready to transform your living spaces into a haven of comfort and style? Look no further! YourHomeDecor offers everything you need to elevate your home.</p>
            <i className="fas fa-couch"></i>
            <p>Join our community of decor enthusiasts and explore curated collections tailored to your taste. Whether you prefer modern, classic, or eclectic styles, we have something for everyone.</p>
            <i className="fas fa-paint-roller"></i>
            <p>Get inspired with tips and ideas from our experts and discover how you can make your house truly feel like home.</p>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default About;  // Exporting as "About"
