import React from 'react';
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Showcase = ({ data }) => {

  return (
    <div className="Main">
      <Row>
        <Col>
          <a href="https://www.amazon.com/-/es/Calcoman%C3%ADas-patineta-guitarra-autom%C3%B3vil-bicicleta/dp/B082WGJY4T?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TGK6FD2G4DL1&dchild=1&keywords=ricky+and+morty&qid=1614479342&refinements=p_72%3A2661618011&rnid=2661617011&sprefix=ricky+and+mort%2Caps%2C297&sr=8-2&linkCode=li3&tag=paulmoro-20&linkId=908cfb6b4c0b7e22c50277d439ebc60e&language=es_US&ref_=as_li_ss_il" 
            target="_blank">
            <img 
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B082WGJY4T&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=paulmoro-20&language=es_US" 
            /></a>
          <img 
            src="https://ir-na.amazon-adsystem.com/e/ir?t=paulmoro-20&language=es_US&l=li3&o=1&a=B082WGJY4T" 
            alt="" 
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
)};


export default Showcase;