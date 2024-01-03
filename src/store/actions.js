import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./Constant";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addToDo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

