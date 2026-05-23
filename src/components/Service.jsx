import React from 'react'
import { Link } from 'react-router-dom'
function Service() {
  return (
    <div>
        <h1>Service Page</h1>
        <Link to="/">
        <button>Go To Home Page</button>
        </Link>

    </div>
  )
}

export default Service