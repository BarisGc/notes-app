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
            <a href="#" id="routine" onClick={handleColorFilter}>Routine</a>
            <a href="#" id="projects" onClick={handleColorFilter}>Projects</a>
            <a href="#" id="urgent" onClick={handleColorFilter}>Urgent</a>
            <a href="#" id="ideas" onClick={handleColorFilter}>Ideas</a>
        </div>
    )
}

export default ColorFilterHovarableRightSideNav