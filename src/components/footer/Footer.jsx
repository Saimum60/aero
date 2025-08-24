import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import FooterReuse from './FooterReuse'



const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <FooterReuse />
                <FooterReuse/>
                <FooterReuse/>
            </Row>
        </Container>
    </section>
  )
}

export default Footer