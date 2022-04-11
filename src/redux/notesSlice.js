import { createSlice } from "@reduxjs/toolkit";
import moment from 'moment';
// import { getTodosAsync, addTodosAsync, toggleTodosAsync, removeTodosAsync } from "./services";

// export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     const res = await fetch('http://localhost:7000/todos');
//     return await res.json()
// })
//bunun yerine axios tercih ettik

var now = moment();
let currentTime = moment().format('YYYY-MM-DD-HH-MM');
console.log("now", now)
console.log("currentTime", currentTime)
export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: "white note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "routine",
                isOpen: false,
                addedAt: "20220401170401", // YYYYMMDDHHmmss
            },
            {
                id: 2,
                title: "aqua note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "projects",
                isOpen: false,
                addedAt: "20220402170402",
            },
            {
                id: 3,
                title: "pink note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "urgent",
                isOpen: false,
                addedAt: "20220403170403",
            },
            {
                id: 4,
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220404170404",
            },
            {
                id: 5,
                title: "white note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "routine",
                isOpen: false,
                addedAt: "20220401170405",
            },
            {
                id: 6,
                title: "aqua note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "projects",
                isOpen: false,
                addedAt: "20220402170406",
            },
            {
                id: 7,
                title: "pink note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "urgent",
                isOpen: false,
                addedAt: "20220403170407",
            },
            {
                id: 8,
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220404170408",
            },
            {
                id: 9,
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220404170409",
            },
            {
                id: 10,
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220404170410",
            },
            {
                id: 11,
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220404170411",
            },
        ],
        // isLoading: false,
        // error: null,
        // activeFilter: localStorage.getItem('activeFilter'),
        // // addNewTodoIsLoading: false,
        // // addNewTodoError: null,
        // addNewTodo: {
        //     isLoading: false,
        //     error: false,
        // },
    },
    // {
    //     id: 1,
    //     title: "white note",
    //     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    //     category: "routine",
    //     isOpen: false,
    //     addedAt: "2022040117040159", // YYYYMMDDHHmmss
    // },
    reducers: {
        addNewNote: (state, action) => {
            // Add a Note
            state.items.push(action.payload)

            // Sort Notes Order By addedAt(Newest First)
            let sortedNotesArr = [];
            let noteAddedTimesArr = [];

            for (let note of state.items) {
                noteAddedTimesArr.push(note.addedAt)
            }
            noteAddedTimesArr.sort(function (a, b) { return b - a });
            noteAddedTimesArr.forEach((time) => {
                sortedNotesArr.push(state.items.find((note) => (note.addedAt === time)))
            })
            state.items = sortedNotesArr;

            console.log("state.items", state.items)
        },
        // addTodo: {
        //     reducer: (state, action) => {
        //         state.items.push(action.payload)
        //     },
        //     prepare: ({ title }) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 completed: false,
        //                 title,
        //             }
        //         }
        //     },
        // },
        //bunu yerine backend işlemlerini tercih ettik
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find(item => item.id === id)
        //     item.completed = !item.completed;
        // },
        //middleware ile hallettik
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;
        // },
        // changeActiveFilter: (state, action) => {
        //     state.activeFilter = action.payload
        // },
        // clearCompleted: (state) => {
        //     const filtered = state.items.filter((item) => item.completed === false);
        //     state.items = filtered;
        // },
    },
    extraReducers: {
        // get todos
        // [getTodosAsync.pending]: (state, action) => {
        //     state.isLoading = true;
        // },
        // [getTodosAsync.fulfilled]: (state, action) => {
        //     state.items = action.payload;
        //     state.isLoading = false;
        // },
        // [getTodosAsync.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.error.message;
        // },
        // // add todo
        // [addTodosAsync.pending]: (state, action) => {
        //     state.addNewTodo.isLoading = true
        // },
        // [addTodosAsync.fulfilled]: (state, action) => {
        //     state.items.push(action.payload)
        //     state.addNewTodo.IsLoading = false
        // },
        // [addTodosAsync.rejected]: (state, action) => {
        //     state.addNewTodo.IsLoading = false;
        //     state.addNewTodo.Error = action.error.message;
        // },
        // // toggle todo
        // [toggleTodosAsync.fulfilled]: (state, action) => {
        //     const { id, completed } = action.payload
        //     const index = state.items.findIndex(item => item.id === id);
        //     state.items[index].completed = completed
        // },
        // remove todo
        // [removeTodosAsync.fulfilled]: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;
        // },
        // veya alttaki kullanılabilir
        // [removeTodosAsync.fulfilled]: (state, action) => {
        //     const id = action.payload;
        //     const index = state.items.findIndex((item) => item.id === id);
        //     state.items.splice(index, 1)
        // }
    }
});

// export const selectTodos = (state) => state.todos.items;
// export const selectFilteredTodos = (state) => {
//     if (state.todos.activeFilter === 'all') {
//         return state.todos.items;
//     }
//     return state.todos.items.filter((todo) => state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed === true)
// }

export const { addNewNote } = notesSlice.actions;
export default notesSlice.reducer;