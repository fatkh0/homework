import React from "react";
import Todo from "./Todo";
import {compose} from "redux";
import {connect} from "react-redux";
import { setTodos } from "../redux/todo-reducer";
import UserContainer from "./user/UserContainer";
import { toggleActiveUser, toggleCompleted } from "../redux/todo-reducer";

const TodoContainer = (props: any) => {

  if (!(props.todos?.length)) props.setTodos()


 const users = props.todos.map(
   (item: any) => item.userId).filter((userId: number, index: number,  arr: any) => userId !== arr[index + 1])

   const users1 = Array.from(new Set(props.todos.map((todo: any) => todo.userId)))
   
  
 const getActiveTodos = (userId: number, id: number, title: string, completed: boolean) => props.activeUsers.some(
   (user: any, i: number) => user === userId) 
    ? <Todo 
      key={id}
      toggleCompleted={props.toggleCompleted}  
      userId={userId} 
      id={id} 
      title={title} 
      completed={completed} />
    : null


    return users.map((userId: any, i: number) =>  ( <> 
      <UserContainer 
        key={userId} 
        userId={userId} 
        toggleActiveUser={props.toggleActiveUser} 
        />
        {
          props.todos.map((todo: any, i: number) => (todo.userId === userId )
          ? getActiveTodos(userId, todo.id, todo.title, todo.completed)
          : null)
        }
      </>
    ))
      
    
}
const mapStateToProps = (state: any) => ({
  todos: state.todo.todos,
  activeUsers: state.todo.activeUsers
})

export default compose (
  connect (mapStateToProps, {setTodos, toggleActiveUser, toggleCompleted}),
) (TodoContainer)