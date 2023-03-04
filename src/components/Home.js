import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='bg-dark text-center text-white'>
            <Button className='bg-white'>
                <Link to="contact">Contact</Link>
            </Button>
            ||
            <Button className='bg-white'>
                <Link to="/">Home</Link>
            </Button>
        </div>
    )
}

export default Home;