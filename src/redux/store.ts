import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./todo-reducer";
import detailReducer from "./detail-reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  todo: todoReducer,
  detail: detailReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store



