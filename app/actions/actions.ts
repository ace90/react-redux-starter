import { SHOW_TODO_LIST, ADD_TODO } from './actionTypes';
import TodoModel from 'app/models/TodoModel';

export const showTodoList = (content) => ({
    type: SHOW_TODO_LIST,
    payload: content
});

export const addTodoList = (content: TodoModel) => ({
    type: ADD_TODO,
    payload: {
        todo: TodoModel
    }
});