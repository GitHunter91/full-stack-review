import React from 'react'

const Login = (props) => {
    return (
        <div>
            <button className="button" onClick={props.login}>Login</button>
        </div>
    )
}

export default Login