import React from 'react';
import Servicecard from './Servicecard';
import { Col } from 'reactstrap';
import serviceData from '../utilities/Services';

const ServiceList = () => {
  return (
    <>
        {
            serviceData.map((item, index) => (
                <Col lg='3' kry={index}>
                    <Servicecard item={item} />
                </Col>
            ))
        }
    </>
  )
}

export default ServiceList;