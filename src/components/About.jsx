import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        <h1>About Page</h1>
        <Link to="/service">
        <button>Go To Service Page</button>
        </Link>

    </div>
  )
}

export default About