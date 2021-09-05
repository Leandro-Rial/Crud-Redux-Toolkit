import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id: uuidv4(), title: "First", completed: false },
    { id: uuidv4(), title: "Second", completed: false },
    { id: uuidv4(), title: "Three", completed: false },
]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                title: action.payload.title,
                completed: false
            };

            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id,
            );
            
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer