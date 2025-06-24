import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ islogedIn, Component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!islogedIn) {
            navigate('/login')
        }
    },[])
    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoute