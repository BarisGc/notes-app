import { useState } from 'react'
import { Col, Button, Offcanvas } from 'react-bootstrap'

function AddNotesOffCanvasLeftMenu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col md={{ span: 3, offset: 0 }}>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'top'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Col>
    );
}

export default AddNotesOffCanvasLeftMenu