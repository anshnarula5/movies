import React from 'react'
import {useSelector} from 'react-redux'

const User = () => {
    const {loading, userInfo, error} = useSelector(state => state.login)
    
    return (
        <div>
            
        </div>
    )
}

export default User
