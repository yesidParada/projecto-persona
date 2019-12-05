import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    this.setState ({ isRedirected: true})
  }
  render() {
    const { name, last_name, id, facebook } = this.props;
    if(this.state.isRedirected) {
      return(<Redirect to= { "/detail/" + id }/>)
    }
    return(
      <div className="card" onClick= { this.onClick }>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="UserItem-img"
              src="https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
              alt="profile"
            />
          </div>
          <div className="UserItem-rightBox">
            <h3 className="UserItem-name">{ name + " " + last_name }</h3>
            <h3 className="UserItem-facebook">{ facebook }</h3>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string.isRequired,
}
export default UserItem;
