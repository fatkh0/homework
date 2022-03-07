import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import UserContainer from "../user/UserContainer";
import { toggleActiveUser } from "../../redux/todo-reducer";
import Todo from "./Todo";

const TodoContainer = (props: any) => {


 const users = props.todos.map(
   (item: any) => item.userId).filter((userId: number, index: number,  arr: any) => userId !== arr[index + 1])
   
  

 const getUserTodos = (userId: number) => props.todos.filter((todo: any, i: number) => (todo.userId === userId ))

 const checkIsActive = (userId: number) => props.activeUsers.some((t: number) => t === userId)
  
    return users.map((userId: any, index: number) =>(
      <div key={userId}>
        <UserContainer 
        key={userId} 
        userId={userId} 
        userTodos={getUserTodos(userId)}
        />
        { checkIsActive(userId) 
           ? getUserTodos(userId).map((todo:any , i: number) => (
              <Todo 
                key={i}
                userId={userId} 
                id={todo.id} 
                title={todo.title} 
                completed={todo.completed} 
              />
            ))
          : null
        }
      </div>
    ))
      
    
}
const mapStateToProps = (state: any) => ({
  todos: state.todo.todos,
  activeUsers: state.todo.activeUsers
})

export default compose (
  connect (mapStateToProps, {toggleActiveUser}),
) (TodoContainer)