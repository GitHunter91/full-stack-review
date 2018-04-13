import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../Redux/reducer'
import axios from 'axios'

const Profile = (props) => {
    return (
        <div>
            <img src={ props.picture } alt={`user ${props.name}`}/>
            <h1>{ props.name }</h1>
            <h6>email: { props.email }</h6>
            <button className="button" onClick={() => {
                axios.post('/api/logout').then( () => {
                    props.logout();
                    props.history.push('/');
                })
            }}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    logout
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)