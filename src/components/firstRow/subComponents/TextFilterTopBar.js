import { useState, useRef } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { InputGroup, Overlay, Tooltip, FormControl, Offcanvas, Button, Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import moment from 'moment';
import { addNewNote, selectFilterOption } from '../../../redux/notesSlice'

function TextFilterTopBar() {
    //General
    const dispatch = useDispatch();
    let currentTime = moment().format('YYYYMMDDHHmmss');

    // Selectors
    const filterTypes = useSelector((state) => state.notes.filterTypes);

    //State
    const initialValues = {
        id: '',
        title: '',
        content: '',
        category: 'routine',
        isOpen: true,
        addedAt: '',
    };
    const [values, setValues] = useState(initialValues);
    const [radioValue, setRadioValue] = useState('routine');
    // offCanvas
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setRadioValue('routine');
        setValues(initialValues)
    }
    const toggleShow = () => setShow((s) => !s);

    // offCanvas-Checkbox Buttons
    const filterCategories = ["routine", "projects", "urgent", "ideas"]
    const radios = [
        { name: 'category', value: filterCategories[0] },
        { name: 'category', value: filterCategories[1] },
        { name: 'category', value: filterCategories[2] },
        { name: 'category', value: filterCategories[3] },
    ];

    // Handle Inputs onChange
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'category') {
            setRadioValue(e.target.value)
        }
        setValues({
            ...values,
            [name]: value,
        });

    };

    // Save Note
    const saveNote = () => {
        // Validation
        console.log("values.title.length", values.title.length)
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
        }
        // Save 
        else {
            setIsTitleValidated(true)
            handleClearFilters()
            dispatch(addNewNote(
                {
                    ...values,
                    id: nanoid(),
                    addedAt: currentTime

                }))
            setShow(false);
            setRadioValue('routine');
            setValues(initialValues)
        }
    }
    console.log("values", values)

    // Text Search & Filter
    const handleTextSearch = (e) => {
        dispatch(selectFilterOption(
            {
                ...filterTypes,
                searchText: e.target.value
            }))
    }
    // Reset Filters
    const handleClearFilters = (e) => {
        dispatch(selectFilterOption(
            {
                searchText: '',
                colorFilter: '',
            }))
    }

    // Custom Validations
    const targetTitle = useRef(null);
    const targetContent = useRef(null);
    const [isTitleValidated, setIsTitleValidated] = useState(null)
    const [isContentValidated, setContentValidated] = useState(null)
    return (
        <Row className='my-3 TextFilterTopBar' >
            <Offcanvas className='h-75 TextFilterTopBarContainer bg-dark text-white ' show={show} onHide={handleClose} scroll={true} backdrop={true} placement={'top'}>
                <Offcanvas.Header closeButton className='TextFilterTopBarHeader btn-close-white me-3'>
                    <Offcanvas.Title className='TextFilterTopBarHeaderTitle'>Add Note</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='TextFilterTopBarBody'>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={targetTitle} size="sm" type="text" placeholder="Enter Your Title Here..."
                                name='title' onChange={handleInputChange} />
                            {isTitleValidated === false &&
                                <Col  >
                                    <Overlay target={targetTitle.current} show={true} placement="top">
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
                            <Form.Control ref={targetContent} size="sm" as="textarea" rows={5} placeholder='Enter Your Note Here...'
                                name='content' onChange={handleInputChange} />
                            {isContentValidated === false &&
                                <Col >
                                    <Overlay target={targetContent.current} show={true} placement="bottom">
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
                        <Form.Group>
                            <Button variant="secondary" id="button-addon1"
                                onClick={() => saveNote()}
                            >
                                Save Note
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            <Col md={{ span: 6, offset: 3 }} >
                <InputGroup className=" ">
                    <InputGroup.Text className='searchIcon pb-2' id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                    <FormControl
                        placeholder=""
                        aria-label="SearchNotes"
                        aria-describedby="SearchNotesInput"
                        className='searchInput pb-2'
                        onChange={handleTextSearch} />
                    {/* To Remove Active Button Effect, I doubled button rendering */}
                    {!show && <Button variant="success" onClick={toggleShow} className='addButton'>
                        Add New Note
                    </Button>}
                    {!show && <Button variant="danger" onClick={handleClearFilters} className='clearButton'>
                        Clear All Filters
                    </Button>}
                    {show && <Button variant="success" onClick={toggleShow} className='addButton'>
                        Add New Note
                    </Button>}
                    {show && <Button variant="danger" onClick={handleClearFilters} className='clearButton'>
                        Clear All Filters
                    </Button>}
                </InputGroup>
            </Col>

        </Row >
    )
}

export default TextFilterTopBar