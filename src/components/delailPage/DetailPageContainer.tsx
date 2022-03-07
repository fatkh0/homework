import React from "react";
import DetailPage from "./DetailPage";
import { useLocation } from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const DetailPageContainer = (props: any) => {

  if(!props.todos.length) props.setTodos()
  
  const location = useLocation().pathname
  const path = location.slice(1).split('/')
  
  const getIdFromPath = (subPath: string) => Number(subPath.match(/(\d+)/g))

  const userId = getIdFromPath(path[1])
  const todoId = getIdFromPath(path[2])


  const foundTodo = () =>  props.todos.filter(
    (user: any) => user.userId === userId).filter(
      (todo: any) => todo.id === todoId)

      
  

  return <DetailPage foundTodo={foundTodo()} /> 
}


const mapStateToProps = (state: any) => ({
  todos: state.todo.todos,
  isFetching: state.todo.isFetching
})

export default compose (
  connect (mapStateToProps, {})
) (DetailPageContainer)