import { useState, useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import moment from 'moment';
import { Row, Col, Card, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import { deleteNote } from '../../../redux/notesSlice'

function NoteContentCards() {
    const dispatch = useDispatch();

    //states & selectors
    const notes = useSelector((state) => state.notes.items);
    const filterTypes = useSelector((state) => state.notes.filterTypes);
    console.log("filterTypes", filterTypes)
    const filteredNotes = () => {
        if (filterTypes.searchText === '' && filterTypes.colorFilter === '') {
            return notes
        } else if (filterTypes.searchText !== '' && filterTypes.colorFilter === '') {
            return notes.filter((note) =>
                (note.content.toLowerCase().includes(filterTypes.searchText)) || (note.title.toLowerCase().includes(filterTypes.searchText)))
        } else if (filterTypes.searchText === '' && filterTypes.colorFilter !== '') {
            return notes.filter((note) => (note.category === filterTypes.colorFilter))
        } else if (filterTypes.searchText !== '' && filterTypes.colorFilter !== '') {
            return notes.filter((note) =>
                ((note.content.toLowerCase().includes(filterTypes.searchText)) || (note.title.toLowerCase().includes(filterTypes.searchText))) && (note.category === filterTypes.colorFilter))
        }
    }

    // Delete Note
    const handleDeleteNote = (id) => {
        console.log("deleteidclick", id)
        dispatch(deleteNote(id))
    }
    return (
        <Row xs={1} md={5} className="g-2 mt-1 ">
            {filteredNotes().map((note) => (
                <Col key={note.id}>
                    <Card className={`noteContentCardsContainer ${note.category}`}>
                        <Card.Header className='noteContentCardsHeader'>
                            <Row >
                                <Col md={{ span: 7, offset: 0 }}>
                                    {note.title}
                                </Col>
                                <Col md={{ span: 2, offset: 0 }} className=''>
                                    <ButtonGroup >
                                        <Button size="sm" variant="outline-dark" className='noteContentCardsEditButton' >
                                            <i className="fa-solid fa-pen"></i>
                                        </Button>
                                        <Button size="sm" variant="outline-dark"
                                            onClick={() => handleDeleteNote(note.id)} className='noteContentCardsDeleteButton' >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>

                        </Card.Header>
                        <Card.Body>
                            <Card.Text className='noteContentCardsText'>
                                {note.content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {/* // YYYYMMDDHHmmss moment("12-25-1995", "MM-DD-YYYY"); */}
                            <small className="text-muted noteContentCardsFooter">
                                {moment(note.addedAt, "YYYYMMDDHHmmss")
                                    .format('YYYY-MM-DD HH:mm:ss')
                                }</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default NoteContentCards