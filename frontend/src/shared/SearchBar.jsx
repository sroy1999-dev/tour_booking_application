import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'reactstrap';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { RiMapPinTimeLine, RiGroupLine } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const clickHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;
    if(location === '' || distance === '' || maxGroupSize === '') {
        return toast.error('All fields are mandatory', {
            style: {
                borderRadius: '20px',
                background: '#333',
                color: '#fff'
            }
        });
    }
  }
  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center justify-content-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-first'>
                    <span><HiOutlineMapPin /></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-first'>
                    <span><RiMapPinTimeLine /></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance in k/m' ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><RiGroupLine /></span>
                    <div>
                        <h6>Max people</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>
                <span className='search__icon' type='submit' onClick={clickHandler}><BiSearchAlt2 className='magnify align-items-center' /></span>
            </Form>
            <Toaster />
        </div>
    </Col>
  )
}

export default SearchBar;