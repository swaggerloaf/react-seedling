import * as types from './actionTypes';

// action creators
export function createTodo(todo) {
  return { type: types.CREATE_TODO, todo: todo };
}

//thunks
