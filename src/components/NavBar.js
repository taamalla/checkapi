import React from 'react'
import {Link} from 'react-router-dom'

function NavBar({isLogin,toggle}) {
    
    return (
        <div className="nav-bar">
        
                <h3><Link to='/'>Home</Link></h3>
                <h3><Link to='/users'>List Users</Link></h3>
               
               {(isLogin) ? <button onClick={toggle}>Logout</button> :<button onClick={toggle}>Login</button>}   
                 
            </div>
    )
}

export default NavBar
