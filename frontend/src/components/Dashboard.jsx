import React from 'react'
import { AuthConext } from "../Contexts/AuthContext";
import { useContext } from "react";

function Dashboard() {

    const { token, role } = useContext(AuthConext);

  return (
    <div className='dashboard'>
        {token ?
         <h3>Good Morning {role.username}, have a nice day</h3> 
         : 
         <h4>Please Signup or Login to see your Dashboard</h4>}
    </div>
  )
}

export default Dashboard