import {createSlice} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {id: 1, text: 'Learn Redux', completed: false},
        {id: 2, text: 'Build a redux app', completed: true},
    ],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        }
    }
});

export const {addTask, toggleTaskCompletion, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;