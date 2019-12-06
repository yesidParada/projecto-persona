import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class UserDetailCover extends Component{
  constructor() {
    super();
    this.state = {
      cover: 'https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png'
    }
  }
  render(){
    const { name, lastname } = this.props
    return(
      <div className="UserDetailCover">
        <div>
          <img src={ this.state.cover } alt="profile" className="UserDetailCover-img"/>
        </div>
        <div>
          <h3 className="UserItem-name">{ name + " " + lastname }</h3>
        </div>
      </div>
    );
  }
}
UserDetailCover.protoTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}
export default UserDetailCover;