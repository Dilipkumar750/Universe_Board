import React from 'react'
import {Outlet}  from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'
import './home.css'

function HomeLayout() {
  return (
    <div>
        <div className='home_layout_grid'>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default HomeLayout