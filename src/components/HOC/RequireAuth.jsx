import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'



export const RequireAuth = ({ children }) => {
    const isAuth = useSelector((state) => state.isAuth)
    const location = useLocation()
    if (!isAuth) {
        return <Navigate to="/auth/login" state={{ from: location }} />
    }
    else {
        return children
    }
}

export default RequireAuth

