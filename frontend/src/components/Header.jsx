import React, { useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { HiOutlineBars3 } from 'react-icons/hi2';
import '../styles/Header.css';

const nav__links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]

const Header = () => {
  const stickyHeader = () => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop > 80 ? header.classList.add('sticky__header') : header.classList.remove('sticky__header')
  }
  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    }
  })
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/*-----------------logo----------------*/}
            <div className="logo">
              <img src={logo} alt="Travel World" />
            </div>
            {/*-----------------logo end------------*/}
            {/*------------------menu-------------- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink className={navClass => navClass.isActive ? 'active__link' : ''} to={item.path}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/*-----------------menu end------------*/}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn'><Link style={{fontWeight:600}} to='/login'>Login</Link></Button>
                <Button className='btn primary__btn'><Link style={{fontWeight:600}} to='/register'>Register</Link></Button>
              </div>
              <span className='mobile__menu'>
                <HiOutlineBars3 />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;