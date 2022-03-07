import React from "react";
import { connect } from "react-redux";
import Content from './Content'
import { setTodos } from "../../redux/todo-reducer";
import Preloader from "../../common/Preloader";

const ContentContainer = (props: any) => {
  if (!props.todos.length) props.setTodos()

  return !props.todos.length ? <Preloader /> : <Content />
}



const mapStateToProps = (state: any) => ({
  todos: state.todo.todos
})

export default connect(mapStateToProps, {setTodos})(ContentContainer)