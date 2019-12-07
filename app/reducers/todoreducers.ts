import { SHOW_TODO_LIST } from './../actions/actionTypes';
import { combineReducers } from 'redux';
import TodoModel from 'app/models/TodoModel';


function todoList(state: TodoModel[] = [], action) {
    switch (action.type) {
      case SHOW_TODO_LIST:
        return action.payload;
      default:
        return state
    }
}

const todoReducer = combineReducers({
    todoList
});

export default todoReducer;