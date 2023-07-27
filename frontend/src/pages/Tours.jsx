import React, { useState, useEffect } from 'react';
import Common from '../shared/Common';
import tours from '../assets/data/tours';
import Tourcard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/NewsLetter';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Tours.css';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(5/4); //from backend
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <Common title={"All tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tours.map(tour => <Col lg='3' className='mb-4' key={tour.id}>
                {" "}
                <Tourcard tour={tour} />
              </Col>)
            }
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-2'>
                {
                  [...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page': ''}>
                      {
                        number + 1
                      }
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
        <Newsletter />
      </section>
    </>
  )
}

export default Tours;