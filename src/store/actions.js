import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  UPDATE_TODO_INPUT,
} from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addTodoInput = (payload) => ({
  type: ADD_TODO_INPUT,
  payload,
});
export const deleteTodoInput = (index) => ({
  type: DELETE_TODO_INPUT,
  payload: index,
});
export const updateTodoInput = ({ index, newTodo }) => ({
  type: UPDATE_TODO_INPUT,
  payload: { index, newTodo },
});
