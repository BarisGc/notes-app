import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const exampleDataArr = [
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170401",
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
        addedAt: "20220401170413",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170414",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170415",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170416",
    },
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170417",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170419",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170422",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170423",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170424",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170425",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170427",
    },
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170429",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170433",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170435",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170437",
    },
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170439",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170441",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170442",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170443",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170444",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170445",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170447",
    },
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170449",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170450",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170451",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170452",
    },
    {
        id: nanoid(),
        title: "white note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "routine",
        isOpen: false,
        addedAt: "20220401170453",
    },
    {
        id: nanoid(),
        title: "aqua note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "projects",
        isOpen: false,
        addedAt: "20220401170454",
    },
    {
        id: nanoid(),
        title: "pink note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "urgent",
        isOpen: false,
        addedAt: "20220401170455",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170456",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170458",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170555",
    },
    {
        id: nanoid(),
        title: "yellow note",
        content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        category: "ideas",
        isOpen: false,
        addedAt: "20220401170658",
    },
]

// const test = !localStorage.getItem('noteKeys') ? exampleDataArr : JSON.parse(localStorage.getItem('noteKeys'))
export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: exampleDataArr,
        filterTypes: {
            searchText: '',
            colorFilter: '',
        },
    },
    reducers: {
        addNewNote: (state, action) => {
            // Add a Note
            state.items = action.payload


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
    }
});

export const { addNewNote, selectFilterOption, deleteNote, editNote, toggleNote } = notesSlice.actions;
export default notesSlice.reducer;