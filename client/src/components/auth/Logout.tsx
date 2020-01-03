import React, {useState, Fragment} from 'react'
import {logout} from '../../actions/authActions'
import {connect} from 'react-redux'
import {NavLink} from 'reactstrap'

 const Logout = ({logout}: {logout: () => void}) => {
    return (
        <div>
            
            <NavLink onClick={logout} href='#'>
                Logout
            </NavLink>
        </div>
    )
}


export default connect(null, {logout})(Logout)