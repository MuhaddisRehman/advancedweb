import React from 'react'
import { NavLink } from 'react-router-dom'

function POS() {
  return (
    <div className='container me-5'>
        <h1>This is Point of Sale (POS)</h1>
        <button className='btn btn-promary'><NavLink to="/Products">Home </NavLink> </button>
    </div>
  )
}

export default POS
