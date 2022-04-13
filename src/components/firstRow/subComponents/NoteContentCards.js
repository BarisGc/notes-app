import { useState, useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import moment from 'moment';
import { Row, Col, Card, Modal, Button, ButtonGroup, Form, FormGroup, InputGroup, ToggleButton } from 'react-bootstrap'
import { deleteNote, editNote } from '../../../redux/notesSlice'

function NoteContentCards() {
    const dispatch = useDispatch();
    let currentTime = moment().format('YYYYMMDDHHmmss');

    //some states & selectors
    const notes = useSelector((state) => state.notes.items);
    const filterTypes = useSelector((state) => state.notes.filterTypes);

    const initialValues = {
        id: "",
        title: "",
        content: "",
        category: "",
        isOpen: true,
        addedAt: "",
    };
    const [values, setValues] = useState(initialValues);
    const [radioValue, setRadioValue] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setRadioValue(null);
    }
    const handleShow = () => setShow(true);

    console.log("editValues", values)

    const filterCategories = ["routine", "projects", "urgent", "ideas"]
    const radios = [
        { name: 'category', value: filterCategories[0] },
        { name: 'category', value: filterCategories[1] },
        { name: 'category', value: filterCategories[2] },
        { name: 'category', value: filterCategories[3] },
    ];

    // Filtered Notes
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

    // Modal For Note Edit

    // save note
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'category') {
            setRadioValue(e.target.value)
        }
        setValues({
            ...values,
            [name]: value,
        });
        console.log("handleInputChange")
    };

    const saveNote = () => {
        dispatch(editNote(values))
        console.log("saved")
        setRadioValue(null);
        setValues(initialValues)
        handleClose()
    }

    return (
        <>
            <Row xs={1} md={5} className="g-2 mt-1 editModal">
                {filteredNotes().map((note) => (
                    <Col key={note.id} >
                        <Card className={`noteContentCardsContainer  ${note.category}`}>
                            <Card.Header className='noteContentCardsHeader'>
                                <Row >
                                    <Col md={{ span: 7, offset: 0 }}>
                                        {note.title}
                                    </Col>
                                    <Col md={{ span: 2, offset: 0 }} className=''>
                                        <ButtonGroup >
                                            <Button size="sm" variant="outline-dark" className='noteContentCardsEditButton'
                                                onClick={() => {
                                                    setValues(
                                                        note
                                                    )
                                                    setRadioValue(note.category)
                                                    handleShow()
                                                }} >
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
            {/* // Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter Your Title Here..."
                                name='title' onChange={handleInputChange} value={values.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>
                            <Form.Control size="sm" as="textarea" rows={5} placeholder='Enter Your Note Here...'
                                name='content' onChange={handleInputChange} value={values.content} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3">
                            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                            <InputGroup className="mb-3 ">
                                <ButtonGroup className=''>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            className={`me-2 px-4 offCanvasColorPicker${radio.value}`}
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            // radio value state kaldırmaya çalış olmazsa böyle kullan
                                            name="category"
                                            onChange={handleInputChange}
                                        >
                                            {radioValue === radio.value ? <i className="fa-solid fa-check"></i> : <i>{radio.value}</i>}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    <Form>
                        <Form.Group>
                            <Button variant="secondary" id="button-addon1"
                                onClick={() => saveNote()}
                            >
                                Save Note
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NoteContentCards