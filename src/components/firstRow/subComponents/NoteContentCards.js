import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function NoteContentCards() {
    return (
        <Row xs={1} md={5} className="g-2 mt-1">
            {Array.from({ length: 25 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default NoteContentCards