import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {isAuth,toggleAuth} = useContext(AuthContext)
  return (
    <div>Navbar
        <button onClick={toggleAuth}>
            {isAuth ?"Logout":"Login"}
        </button>
                
    </div>
  )
}

export default Navbar