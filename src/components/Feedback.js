import React from 'react'
import { Outlet } from 'react-router-dom'

function Feedback() {
    return (
        <>
            <div>Feedback</div>
            <Outlet />
        </>
    )
}

export default Feedback