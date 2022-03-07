import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import User from './User'
import { toggleActiveUser } from '../../redux/todo-reducer';

const UserContainer = (props: any) => {

  const toggleTodos = (userId: number): void => {
    props.toggleActiveUser(userId)
  }

  return <User userId={props.userId} activeUsers={props.activeUsers} toggleTodos={toggleTodos} />
}

const mapStateToProps = (state: any) => ({
  activeUsers: state.todo.activeUsers
})


export default compose (
  connect (mapStateToProps, {toggleActiveUser})
) (UserContainer)

