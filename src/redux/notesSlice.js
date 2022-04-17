import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'
import axios from "axios";

const exampleDataArr = [
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
]

// Fetch Api Data


// const getExampleData = () => {
//     localStorage.setItem("noteKeys", JSON.stringify(exampleDataArr))
//     return JSON.parse(localStorage.getItem('noteKeys'))
// }

// async function dataLoad() {
//     try {
//         const oldData = await getExampleData();
//         return localStorage.getItem('noteKeys') ? JSON.parse(localStorage.getItem('noteKeys')) : oldData
//     } catch (err) {
//         console.log('Ohh no:', err.message);
//     }
// }

// export const fetchProducts = createAsyncThunk('notes/getAllNotes', async () => {
//     const res = await axios(dataLoad())
//     return res.data
// })


const test = !localStorage.getItem('noteKeys') ? exampleDataArr : JSON.parse(localStorage.getItem('noteKeys'))
export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: test,
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
        deleteNote: (state, action) => {
            const id = action.payload;
            const newNotes = state.items.filter((note) => note.id !== id);
            state.items = newNotes
            console.log("action.payload", action.payload)
            console.log("state.items", state.items)
        },
        editNote: (state, action) => {
            const editedNote = action.payload;
            console.log("editedNote", editedNote)
            state.items.forEach((objectElement, index) => {
                if (objectElement.id === editedNote.id) {
                    state.items[index] = editedNote
                }
            })
        },
        toggleNote: (state, action) => {
            const id = action.payload;
            const note = state.items.find((element) => element.id === id);
            note.isOpen = !note.isOpen;
        }
    },
    extraReducers: {
        // get todos
        // [fetchProducts.pending]: (state, action) => {
        //     state.isLoading = true;
        // },
        // [fetchProducts.fulfilled]: (state, action) => {
        //     state.items = action.payload;
        //     state.isLoading = false;
        // },
        // [fetchProducts.rejected]: (state, action) => {
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

export const { addNewNote, selectFilterOption, deleteNote, editNote, toggleNote } = notesSlice.actions;
export default notesSlice.reducer;