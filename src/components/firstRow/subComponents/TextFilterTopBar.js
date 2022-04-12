import { useState, } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { InputGroup, FormControl, Offcanvas, Button, Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap'
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
        id: "",
        title: "",
        content: "",
        category: "",
        isOpen: true,
        addedAt: "",
    };
    const [values, setValues] = useState(initialValues);
    const [radioValue, setRadioValue] = useState('');
    // offCanvas
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setRadioValue(null);
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

    };

    const saveNote = () => {
        handleClearFilters()
        dispatch(addNewNote(
            {
                ...values,
                id: nanoid(),
                addedAt: currentTime

            }))
        setShow(false);
        setRadioValue(null);
        setValues(initialValues)

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


    return (
        <Row className='my-3 TextFilterTopBar' >
            <Offcanvas className='h-75 TextFilterTopBarContainer bg-dark text-white ' show={show} onHide={handleClose} scroll={true} backdrop={true} placement={'top'}>
                <Offcanvas.Header closeButton className='TextFilterTopBarHeader btn-close-white me-3'>
                    <Offcanvas.Title className='TextFilterTopBarHeaderTitle'></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='TextFilterTopBarBody'>
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
                        placeholder="Search Notes"
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

        </Row>
    )
}

export default TextFilterTopBar