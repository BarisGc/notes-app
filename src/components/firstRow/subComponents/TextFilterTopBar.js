import { useState } from 'react'
import { InputGroup, FormControl, Offcanvas, Button, Row, Col } from 'react-bootstrap'

function TextFilterTopBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <Row className='my-3' >
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} placement={'top'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <Col md={{ span: 4, offset: 3 }} >
                <InputGroup className=" ">
                    <InputGroup.Text className='searchIcon pb-2' id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                    <FormControl
                        placeholder="Search Notes"
                        aria-label="SearchNotes"
                        aria-describedby="SearchNotesInput"
                        className='searchInput pb-2'
                    />
                </InputGroup>
            </Col>
            <Col md={{ span: 3, offset: 0 }} >
                <InputGroup className="">
                    <Button variant="danger" id="button-addon1" onClick={toggleShow} className='addButton'>
                        Add New Note
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default TextFilterTopBar