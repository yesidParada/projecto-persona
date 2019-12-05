import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'
import UserItem from '../components/UserItem'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'

class Home extends Component {
  constructor() {
    super();
  }
  componentWillMount(){
    this.props.getUsers()
  }
  render(){
    let users = [];
    if(this.props.users.data) {
      users = this.props.users.data.map((currentValue, index, array) => {
        return (
          <UserItem
           key= { index }
           id= { currentValue.id }
           name={ currentValue.name }
           last_name={ currentValue.last_name }
           facebook= { currentValue.facebook }
           />
        )
      })
    }
    return(
      <div className="Home">
        { users }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    users: state.getUsers
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps )(Home);