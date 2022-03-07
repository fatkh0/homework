import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import User from './User'

const UserContainer = (props: any) => {

  const toggleContent = (userId: number): void => {
    props.toggleActiveUser(userId)
  }

  return <User userId={props.userId} activeUsers={props.activeUsers} toggleContent={toggleContent} />
}

const mapStateToProps = (state: any) => ({
  activeUsers: state.todo.activeUsers
})


export default compose (
  connect (mapStateToProps, {})
) (UserContainer)

