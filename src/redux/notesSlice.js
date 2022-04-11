import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

// import { getTodosAsync, addTodosAsync, toggleTodosAsync, removeTodosAsync } from "./services";

// export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     const res = await fetch('http://localhost:7000/todos');
//     return await res.json()
// })
//bunun yerine axios tercih ettik

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "white note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "routine",
                isOpen: false,
                addedAt: "20220401170401", // YYYYMMDDHHmmss
            },
            {
                id: nanoid(),
                title: "aqua note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "projects",
                isOpen: false,
                addedAt: "20220401170402",
            },
            {
                id: nanoid(),
                title: "pink note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "urgent",
                isOpen: false,
                addedAt: "20220401170403",
            },
            {
                id: nanoid(),
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220401170404",
            },
            {
                id: nanoid(),
                title: "white note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "routine",
                isOpen: false,
                addedAt: "20220401170405",
            },
            {
                id: nanoid(),
                title: "aqua note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "projects",
                isOpen: false,
                addedAt: "20220401170406",
            },
            {
                id: nanoid(),
                title: "pink note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "urgent",
                isOpen: false,
                addedAt: "20220401170407",
            },
            {
                id: nanoid(),
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220401170408",
            },
            {
                id: nanoid(),
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220401170409",
            },
            {
                id: nanoid(),
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220401170411",
            },
            {
                id: nanoid(),
                title: "yellow note",
                content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                category: "ideas",
                isOpen: false,
                addedAt: "20220401170412",
            },
        ],
        filterTypes: {
            searchText: '',
            colorFilter: '',
        },
    },
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
        selectFilterOption: (state, action) => {
            state.filterTypes = action.payload;
        },
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

export const { addNewNote, selectFilterOption } = notesSlice.actions;
export default notesSlice.reducer;