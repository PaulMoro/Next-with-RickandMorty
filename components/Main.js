import React from 'react';
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import MainStyle from '../styles/Main'; */


const Main = ({ data }) => {

  return (
    <div className="Main">
      <div className="Main-container">
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
{/*                   <span key={index}>
                    <Link href="/character/id">
                      <Button variant="info">Info</Button>{' '}
                    </Link>
                  </span> */}
                </Carousel.Caption>
              </Carousel.Item>
            )}
          )}
        </Carousel>
      </div>

{/*       <style jsx HomeStyle>
        {MainStyle}
      </style> */}

    </div>
)};


export default Main;