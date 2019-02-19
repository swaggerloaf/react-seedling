import * as types from './actionTypes';
import * as todoApi from '../../api/todoApi';

// action creators
function createTodo(todo) {
  return { type: types.CREATE_TODO, todo };
}

function deleteTodoSuccess(todoId) {
  return { type: types.DELETE_TODO_SUCCESS, todoId };
}

function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos };
}

function createTodoSuccess(todo) {
  return { type: types.CREATE_TODO_SUCCESS, todo };
}

function updateTodoSuccess(todo) {
  return { type: types.UPDATE_TODO_SUCCESS, todo };
}

//thunks

export function loadTodos() {
  return dispatch => {
    return todoApi
      .getAllTodos()
      .then(res => res.json())
      .then(data => dispatch(loadTodosSuccess(data)))
      .catch(error => console.warn(error));
  };
}

export function saveTodo(todo) {
  return dispatch => {
    return todoApi
      .saveTodo(todo)
      .then(res => res.json())
      .then(savedTodo => {
        todo.id
          ? dispatch(updateTodoSuccess(savedTodo))
          : dispatch(createTodoSuccess(savedTodo));
      })
      .catch(error => console.warn(error));
  };
}
export function deleteTodo(todoId) {
  return dispatch => {
    return todoApi
      .deleteTodo(todoId)
      .then(res => res.json())
      .then(() => dispatch(deleteTodoSuccess(todoId)))
      .catch(error => console.warn(error));
  };
}
