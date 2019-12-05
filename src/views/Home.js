import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions'

class Home extends Component {
  constructor(){
    super();
  }
  componentWillMount(){
    this.props.getUsers()
  }
  render(){
    return(
      <div>
        <h2>Home</h2>
        <h1>hello</h1>
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