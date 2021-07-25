/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { Carousel, Col, Container, Row,Button } from 'react-bootstrap';
import styles from '../styles/Slider.module.css'
import Images from 'next/image'
const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className="container">
      <Carousel activeIndex={index} variant="dark"  controls={false} onSelect={handleSelect}>
        <Carousel.Item>
          <Row>
            <Col lg={6} className="order-lg-2 p-2 " >
            <img src={`/images/slide-1.png`} className="img-fluid" alt=""  />
            </Col>
            <Col lg={6} className="order-lg-1 pb-4 pt-4">
              <Container>
                <p className={styles.header}>Do you want to know whether the campaigner is fake or real?</p>
                <Button type="submit" variant="primary" className={styles.button}>Contact Us</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col lg={6} className="order-lg-2 p-2" >
                <img src={`/images/slide-2.png`} className="img-fluid" alt=""  />
            </Col>
            <Col lg={6} className="order-lg-1 pb-4 pt-4">
              <Container>
                <p className={styles.header}>Is your money going to the particular person who is really in need?</p>
                <Button type="submit" variant="primary" className={styles.button}>Contact Us</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col lg={6} className="order-lg-2 p-2" >
                <img src={`/images/slide-3.png`} className="img-fluid" alt=""  />
            </Col>
            <Col lg={6} className="order-lg-1 pb-4 pt-4">
              <Container>
                <p className={styles.header}>Do you need complete information about Campaigner?</p>
                <Button type="submit" variant="primary" className={styles.button}>Contact Us</Button>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
export default Slider;