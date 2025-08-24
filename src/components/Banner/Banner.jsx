import React from 'react'
import './banner.css'
import Hero from '../../assets/hero.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegBell } from "react-icons/fa";



const Banner = () => {
  return (
    <section className='ban'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="bs">
              <div className="lop">
                <button> <span><FaRegBell className='ball'/></span>Startup Business</button>
              </div>
              <h4>Empowering startups to fuel
              their business growth</h4>
            <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
              <br /> velit <br />
              nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p></div>
              <div className="lo">
                <button>Get started now </button>
              </div>
          </Col>
          <Col lg={{span:5,offset:1}}>
            <div className="mn"><img src={Hero} alt="" /></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner