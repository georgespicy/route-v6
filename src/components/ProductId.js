import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function ProductId() {
    const { productid } = useParams()
    return (
        <>
            <h1>url: {productid}</h1>
            <Button className='bg-white'>
                <Link to="/">Home</Link>
            </Button>
        </>
    )
}

export default ProductId