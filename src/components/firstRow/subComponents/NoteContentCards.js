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
    const [modalShow, setModalShow] = useState(false);

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
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            // keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Note
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter Your Title Here..."
                                name='title' onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>
                            <Form.Control size="sm" as="textarea" rows={5} placeholder='Enter Your Note Here...'
                                name='content' onChange={handleInputChange} />
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
                    <Button onClick={props.onHide}>Close</Button>
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
        );
    }

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
    }














    return (
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
                                                setValues({
                                                    ...values,
                                                    id: note.id
                                                })
                                                setModalShow(true)
                                            }} >
                                            <i className="fa-solid fa-pen"></i>
                                        </Button>
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
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