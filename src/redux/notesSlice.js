import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

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
    }
});

export const { addNewNote, selectFilterOption, deleteNote, editNote, toggleNote } = notesSlice.actions;
export default notesSlice.reducer;