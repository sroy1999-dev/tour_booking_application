import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Checkmark } from 'react-checkmark';
import '../styles/ThanksYou.css';

const ThanksYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <Checkmark size='xxLarge' />
                        <h1 className='mb-3 fw-semibold'>Thank you</h1>
                        <h3 className='mb-4'>Your tour is booked</h3>
                        <Button className='btn primary__btn w-25'><Link to='/home'>Return to home</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThanksYou;