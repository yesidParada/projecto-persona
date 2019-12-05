import React, { Component } from 'react'
import PropTypes from 'prop-types'
class UserItem extends Component {
  render() {
    const { name, last_name, id, facebook } = this.props;
    return(
      <div className="card">
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img src="" alt="profile"/>
          </div>
          <div className="UserItem-rightBox">
            <h3 className="UserItem-name">{ name }</h3>
            <h3 className="UserItem-last_name">{ last_name }</h3>
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
