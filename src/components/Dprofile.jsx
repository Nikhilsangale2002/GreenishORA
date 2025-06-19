import React from 'react'
import { Link } from 'react-router-dom'

export default function Dprofile () {
  return (
    <div className="flex flex-col Dprofile">
          <div className="flex flex-col gap-4">
            <strong>Welcome</strong>
            <p>To access account and manage orders</p>
            <Link to="/login" className="login-btn">LOGIN / SIGNUP</Link>
          </div>
          <ul>
            <li><Link to="/login">Orders</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>

        
  )
}
