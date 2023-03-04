import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Contact() {
  return (
    <div className='bg-dark text-center text-white'>
      <p>Contact</p>
      <br/>
      <br/>
      <br/>
      <Button className='bg-white'>
        <Link to="/contact/service">Service</Link>
      </Button>
      ||
      <Button className='bg-white'>
        <Link to="/contact/feedback">feedback</Link>
      </Button>
      <Outlet />
    </div>
  )
}

export default Contact