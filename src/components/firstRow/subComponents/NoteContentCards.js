import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import moment from 'moment';
import { Row, Col, Card, Modal, Button, ButtonGroup, Form, Overlay, Tooltip, InputGroup, ToggleButton } from 'react-bootstrap'
import { deleteNote, editNote, toggleNote } from '../../../redux/notesSlice'
function NoteContentCards() {
    const dispatch = useDispatch();

    //some states & selectors
    const notes = useSelector((state) => state.notes.items);
    const filterTypes = useSelector((state) => state.notes.filterTypes);
    console.log("notes var mu", notes)

    useEffect(() => {
        if (notes.length === 0) {
            localStorage.removeItem("noteKeys")
        } else {
            localStorage.setItem("noteKeys", JSON.stringify(notes))
        }
    }, [notes])

    const initialValues = {
        id: "",
        title: "",
        content: "",
        category: "routine",
        isOpen: true,
        addedAt: "",
    };
    const [values, setValues] = useState(initialValues);
    const [radioValue, setRadioValue] = useState('routine');
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

    console.log("filteredNotes", filteredNotes())
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

    const handleEditNote = () => {
        // Validation
        if ((values.title.length < 1 || values.title.length > 15) && values.content !== '') {
            setIsTitleValidated(false)
            setTimeout(() => {
                setIsTitleValidated(true)
            }, 2000);
        } else if ((values.title.length > 0 && values.title.length < 16) && values.content === '') {
            setContentValidated(false)
            setTimeout(() => {
                setContentValidated(true)
            }, 2000);
        } else if ((values.title.length < 1 || values.title.length > 15) && values.content === '') {
            setIsTitleValidated(false)
            setContentValidated(false)
            setTimeout(() => {
                setIsTitleValidated(true)
                setContentValidated(true)
            }, 2000);
        } else {
            dispatch(editNote(values))
            console.log("saved")
            setRadioValue(null);
            setValues(initialValues)
            handleClose()
        }
    }

    const handleToggleNote = (id) => {
        dispatch(toggleNote(id))
    }

    // Edit Form Validation
    const target3Title = useRef(null);
    const target4Content = useRef(null);
    const [isTitleValidated, setIsTitleValidated] = useState(null)
    const [isContentValidated, setContentValidated] = useState(null)

    return (
        <>
            <Row xs={1} md={4} className="g-2 mt-1 " >
                {filteredNotes()[0] && filteredNotes().map((note) => (
                    <Col key={note.id} >
                        <Card className={`noteContentCardsContainer  ${note.category} `}>
                            <Card.Header className='noteContentCardsHeader'
                            >
                                <Row >
                                    <Col md={{ span: 12, offset: 0 }} className='justify-content-between d-flex'>
                                        <Button variant="outline-dark" onClick={() => handleToggleNote(note.id)}>{note.title}</Button>
                                        <ButtonGroup >
                                            <Button size="sm" variant="outline-dark" className='noteContentCardsEditButton '
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
                            <Card.Body className='noteContentCardsText'>
                                <Card.Text className={`${!note.isOpen ? 'hideCardBody' : ''}`} >
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
                fullscreen={'md-down'}
            >
                <Modal.Header closeButton className='bg-dark text-white'
                    closeVariant={'white'}
                >
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-white  '>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={target3Title} size="sm" type="text" placeholder="Enter Your Title Here..."
                                name='title' onChange={handleInputChange} value={values.title} />
                            {isTitleValidated === false &&
                                <Col xs={5} >
                                    <Overlay target={target3Title.current} show={true} placement="top">
                                        {(props) => (
                                            <Tooltip id="overlay-example" {...props}>
                                                Title Can Not Be Empty {`&`} Longer Than 16 Characters
                                            </Tooltip>
                                        )}
                                    </Overlay>
                                </Col>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>
                            <Form.Control ref={target4Content} size="sm" as="textarea" rows={5} placeholder='Enter Your Note Here...'
                                name='content' onChange={handleInputChange} value={values.content} />
                            {isContentValidated === false &&
                                <Col xs={5} >
                                    <Overlay target={target4Content.current} show={true} placement="bottom">
                                        {(props) => (
                                            <Tooltip id="overlay-example" {...props}>
                                                Content Can Not Be Empty
                                            </Tooltip>
                                        )}
                                    </Overlay>
                                </Col>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3 col-3">
                            <Form.Label htmlFor="exampleColorInput">Color Picker</Form.Label>
                            <InputGroup className="mb-3 ">
                                <ButtonGroup >
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            className={`me-2 px-2 px-md-4 offCanvasColorPicker${radio.value}`}
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            // radio value state kaldırmaya çalış olmazsa böyle kullan
                                            name="category"
                                            onChange={handleInputChange}
                                        >
                                            {radioValue === radio.value ? <i className="fa-solid fa-check "></i> : <i >{radio.value}</i>}

                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark text-white'>
                    <Form>
                        <Form.Group>
                            <Button variant="secondary" id="button-addon1"
                                onClick={() => handleEditNote()}
                            >
                                Update Note
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NoteContentCards