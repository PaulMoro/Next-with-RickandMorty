import React from 'react';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Main = ({ data }) => {

  return (
    <div className="Main">
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Carousel>
            {data.results.map((mydata, index) => {
              return (
                <Carousel.Item key={mydata.results}>
                  <img  
                    className="d-block w-100"
                    src={mydata.image}
                    alt={mydata.name}
                  />
                  <Carousel.Caption>
                    <h2>{mydata.name}</h2>
                    <p>{mydata.species}</p>
                    <p>{mydata.status}</p>
                      <span key={index}>
                     {/*  <Link href="/character/id"> */}
                        <Button variant="info">Info</Button>{' '}
                      {/* </Link> */}
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
            )}
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
    </div>
)};


export default Main;