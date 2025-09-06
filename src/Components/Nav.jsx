import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgMenu } from "react-icons/cg";

import { FaRobot } from "react-icons/fa";

const Nav = () => {
    const [menu , setMenu]= useState(false)
    const handleMenu = ()=>{
        setMenu(!menu)
    }
  return (
    <div>
        <nav className='hidden  md:flex white shadow-lg justify-between mt-3 px-10 '>
            <h1 className='flex  font-bold items-center text-2xl text-cyan-700'><FaRobot size={40}/>SamoChat</h1>

            <div className='space-x-4 py-5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/Contact'}>Contacts</Link>
            <Link to={'/profile'}>Setings</Link>
            </div>
        </nav>


        {/* //Mobile */}
        <div className='bg-white py-4 md:hidden shadow-lg flex justify-between px-4'>
            <h1 className='space-x-4 flex font-bold items-center text-2xl text-cyan-700'><FaRobot size={30}/>SamoChat</h1>
            <button onClick={handleMenu}><CgMenu size={30}/></button>
        </div>

        {
            menu &&(
                <nav className='md:hidden flex  flex-col    white  py-4 shadow-lg p-3'>
            <Link to={'/'}>Home</Link>
            <Link to={'/Contact'}>Contacts</Link>
            <Link to={'/profile'}>Setings</Link>
        </nav>
            )
        }
    </div>
  )
}

export default Nav