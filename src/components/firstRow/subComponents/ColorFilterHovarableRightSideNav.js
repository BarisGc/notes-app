import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterOption } from '../../../redux/notesSlice'

function ColorFilterHovarableRightSideNav() {
    const dispatch = useDispatch();

    const filterTypes = useSelector((state) => state.notes.filterTypes);

    const handleColorFilter = (e) => {
        dispatch(selectFilterOption(
            {
                ...filterTypes,
                colorFilter: e.target.id
            }))
    }

    return (
        <div id="mySidenav" className="sidenav">
            <button href="#" id="routine" onClick={handleColorFilter}>Routine</button>
            <button href="#" id="projects" onClick={handleColorFilter}>Projects</button>
            <button href="#" id="urgent" onClick={handleColorFilter}>Urgent</button>
            <button href="#" id="ideas" onClick={handleColorFilter}>Ideas</button>
        </div>
    )
}

export default ColorFilterHovarableRightSideNav