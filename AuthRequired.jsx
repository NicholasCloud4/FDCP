import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
    // Check the authenticated status of the user
    const authenticated = false
    // If they're NOT authenticated
    // send the user to the login page
    if (authenticated === false) {
        return <Navigate to="login" />
    }

    // Mini challenge: write this logic 👇
    // If they ARE authenticated
    // Render the Outlet
    if (authenticated === true) {
        return <Outlet />
    }
}