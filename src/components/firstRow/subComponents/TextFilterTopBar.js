import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

function TextFilterTopBar() {
    return (
        <div className='TextFilterTopBar d-flex justify-content-center pt-3 pb-2'>
            <InputGroup className="w-50 h-50 align-self-center ">
                <InputGroup.Text className='mb-2 pb-1 searchIcon' id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <FormControl
                    placeholder="Search Notes"
                    aria-label="SearchNotes"
                    aria-describedby="SearchNotesInput"
                    className='mb-2 pb-1 searchInput'
                />
            </InputGroup>
        </div>
    )
}

export default TextFilterTopBar