import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsersById } from '../actions'
import UserDetailCover from '../components/UserDetailCover'
import UserDetailBody from '../components/UserDetailBody'

class UserDetail extends Component{
  componentWillMount(){
    this.props.getUsersById(this.props.match.params.userId)
  }
  render() {
    if(this.props.userDetail.data){
      const { name, last_name, message } = this.props.userDetail.data;
      return(
        <div>
          <UserDetailCover name= { name } lastname= { last_name }/>
          <UserDetailBody message= { message }/>
        </div>
      )
    }
    return(<div></div>)
  }
}
function mapStateToProps(state) {
  return {
    userDetail: state.getUsersById
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsersById
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps )(UserDetail);