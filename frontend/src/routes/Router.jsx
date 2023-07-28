import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const Home = React.lazy(() => import('../pages/Home'));
const Tours = React.lazy(() => import('../pages/Tours'));
const TourDetails = React.lazy(() => import('../pages/TourDetails'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const SearchResultList = React.lazy(() => import('../pages/SearchResultList'));
const About = React.lazy(() => import('../pages/About'));
const ThanksYou = React.lazy(() => import('../pages/ThanksYou'));

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path='/tours' element={<Suspense fallback={<div>Loading...</div>}><Tours /></Suspense>} />
        <Route path='/tours/:id' element={<Suspense fallback={<div>Loading...</div>}><TourDetails /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>} />
        <Route path='/tours/search' element={<Suspense fallback={<div>Loading...</div>}><SearchResultList /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
        <Route path='/thank-you' element={<Suspense fallback={<div>Loading...</div>}><ThanksYou /></Suspense>} />
    </Routes>
  )
}

export default Router;