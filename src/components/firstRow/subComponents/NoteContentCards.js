import { useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap'

function NoteContentCards() {
    const dispatch = useDispatch();

    //states
    const notes = useSelector((state) => state.notes.items);

    return (
        <Row xs={1} md={5} className="g-2 mt-1 ">
            {notes.map((note) => (
                <Col key={note.id}>
                    <Card className={`noteContentCardsContainer ${note.category}`}>
                        <Card.Header className='noteContentCardsHeader'>{note.title}</Card.Header>
                        <Card.Body>
                            <Card.Text className='noteContentCardsText'>
                                {note.content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted noteContentCardsFooter">{note.addedAt}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default NoteContentCards