import { useState, useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import moment from 'moment';
import { Row, Col, Card } from 'react-bootstrap'

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

    return (
        <Row xs={1} md={5} className="g-2 mt-1 ">
            {filteredNotes().map((note) => (
                <Col key={note.id}>
                    <Card className={`noteContentCardsContainer ${note.category}`}>
                        <Card.Header className='noteContentCardsHeader'>{note.title}</Card.Header>
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