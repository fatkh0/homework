import React from "react";
import CheckCompleted from "./CheckCompleted";
import { connect } from "react-redux";
import { toggleCompleted } from "../../redux/todo-reducer";

const CheckCompletedContainer = (props: any) => {

  return <CheckCompleted
   userId={props.userId} 
   todoId={props.todoId} 
   completed={props.completed} 
   toggleCompleted={props.toggleCompleted} 
   />
}

const mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps, {toggleCompleted})(CheckCompletedContainer)
