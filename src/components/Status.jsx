import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Status = () => {
    const{isAuth,token} = useContext(AuthContext)

  return (
    <div>Status : {isAuth ?"User is logged in with Token No. :"+ token :"User is Logged Out"}</div>
  )
}

export default Status