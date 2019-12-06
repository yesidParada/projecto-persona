import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import UserPost from './UserPost'

class UserDetailBody extends Component{
  constructor(props){
    super(props);
    this.state ={
        message: this.props.message
    }
  }
  render () {
    return(
      <div className="UserDetailBody">
        
      </div>
    );
  }
}
UserDetailBody.protoTypes = {
  message: PropTypes.array.isRequired
}
export default UserDetailBody;