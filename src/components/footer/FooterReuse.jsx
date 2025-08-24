import React from 'react'
import { Col } from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";

const FooterReuse = () => {
  return (
    <Col lg={4}>
                <div className="fot">
                    <i> <FaBaseballBall className='icon'/></i>
                    <div className="lot"></div>
                    <div className="ut">
                        <h4>Immediate Deployment</h4>
                    <p>Et vero eos et accusamus et iusto odio dignissimos</p>
                    </div>
                </div>
                
                </Col>
  )
}

export default FooterReuse