/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import styles from '../styles/Slider.module.css'
import Images from 'next/image'
const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  function scrollto() {
    const contact = window.document.getElementById("contact");
    contact.scrollIntoView();
  }
  return (
    <div className="container">
      <Carousel activeIndex={index} variant="dark" controls={false} onSelect={handleSelect}>
        <Carousel.Item >
          <Row style={{ alignItems: "center" }}>
            <Col lg={6} className="order-lg-2" >
              <img src={`/images/slide-1.png`} className="img-fluid" alt="" />
            </Col>
            <Col lg={6} className="order-lg-1">
              <Container>
                <p className={styles.header}>Do you want to know whether the campaigner is fake or real?</p>
                <Button type="submit" onClick={scrollto} variant="primary" className={styles.button}>ASK ME</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <Row style={{ alignItems: "center" }}>
            <Col lg={6} className="order-lg-2" >
              <Container style={{overflow:"clip",maxHeight:"364px"}}>
                <img src={`/images/3277194.png`} className="img-fluid" alt="" />
              </Container>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Container>
                <p className={styles.header}>Is your money going to the particular person?</p>
                <Button type="submit" onClick={scrollto} variant="primary" className={styles.button}>ASK ME</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row style={{ alignItems: "center" }}>
            <Col lg={6} className="order-lg-2" >
              <img src={`/images/slide-3.png`} className="img-fluid" alt="" />
            </Col>
            <Col lg={6} className="order-lg-1">
              <Container>
                <p className={styles.header}>Do you need complete information about Campaigner?</p>
                <Button type="submit" onClick={scrollto} variant="primary" className={styles.button}>ASK ME</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;