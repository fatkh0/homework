import { getTodos } from "../api/api"
import {updateDetails} from './detail-reducer'

const UPDATE_TODOS = 'UPDATE_TODOS'
const TOGGLE_ERROR = 'TOGGLE_ERROR'
const TOGGLE_ACTIVE_USER = 'TOGGLE_ACTIVE_USER'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

interface State {
  todos: object
  isError: boolean
  activeUsers: object
}

const initialState: State = {
  todos: [],
  isError: false,
  activeUsers: []
}

const todoReducer = (state: any = initialState, action: any) => {
  switch (action.type){
    case UPDATE_TODOS:
        return {...state, todos: action.todos}
    case TOGGLE_ERROR:
      return {...state, isError: action.isError}
    case TOGGLE_ACTIVE_USER:
      if (state.activeUsers.some((userId: number) => userId === action.userId)) {
        return {...state, activeUsers: state.activeUsers.filter((t: number) => t !== action.userId)}
      }
      return {...state, activeUsers: [...state.activeUsers, action.userId]}
    case TOGGLE_COMPLETED: 
      const updatedTodos = state.todos.map(
        (todo: any) => {
          if (todo.userId === action.userId && todo.id === action.todoId) {
            return {...todo, completed:  !todo.completed}
          }
          return todo
        }
        )
      return {...state, todos: updatedTodos}
      default:
        return state
  }
}
export default todoReducer

const updateTodos = (todos: object) => ({type: UPDATE_TODOS, todos})
const toggleError = (isError: boolean) => ({type: TOGGLE_ERROR, isError})
export const toggleActiveUser = (userId: number) => ({type: TOGGLE_ACTIVE_USER, userId})
export const toggleCompleted = (userId: number, todoId: number) => ({type: TOGGLE_COMPLETED, userId, todoId})

export const setTodos = () => async (dispatch: any) => {
  const detailisList = {
    fetching: 'fetching',
    updatingStore: 'updateing store',
    updatingUi: 'updating ui',
    error: 'error, data not found'
  }
  dispatch(updateDetails(detailisList.fetching))
  try {
    const response = await getTodos()
    dispatch(updateDetails(detailisList.updatingStore))
    dispatch(toggleError(false))
    dispatch(updateDetails(detailisList.updatingUi))
    dispatch(updateTodos(response))
  } catch (e: any) {
    dispatch(updateDetails(detailisList.error))
    dispatch (toggleError(true))
  }
  
}