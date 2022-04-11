import { useState, } from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { addNewNote } from '../../../redux/notesSlice'
import { InputGroup, FormControl, Offcanvas, Button, Row, Col, Form, ButtonGroup, ToggleButton } from 'react-bootstrap'

function TextFilterTopBar() {
    const dispatch = useDispatch();

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
    }
    const toggleShow = () => setShow((s) => !s);

    // offCanvas-Checkbox Buttons
    const filterCategories = ["routine", "projects", "urgent", "ideas"]
    const radios = [
        { name: 'Radio', value: filterCategories[0] },
        { name: 'Radio', value: filterCategories[1] },
        { name: 'Radio', value: filterCategories[2] },
        { name: 'Radio', value: filterCategories[3] },
    ];

    // save note
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'radio') {
            setRadioValue(e.target.value)
        }
        setValues({
            ...values,
            [name]: value,
        });
    };
    console.log("values", values)
    // const saveNote = () => {
    //     dispatch(addNewNote(values))
    //     setShow(false);
    // }



    return (
        <Row className='my-3 TextFilterTopBar' >
            <Offcanvas className='h-75 TextFilterTopBarContainer bg-dark text-white ' show={show} onHide={handleClose} scroll={true} backdrop={true} placement={'top'}>
                <Offcanvas.Header closeButton className='TextFilterTopBarHeader btn-close-white me-3'>
                    <Offcanvas.Title className='TextFilterTopBarHeaderTitle'></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='TextFilterTopBarBody'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Enter Your Title Here..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control size="sm" as="textarea" rows={5} placeholder='Enter Your Note Here...' />
                        </Form.Group>
                        <Form.Group className="mb-3 col-2" controlId="exampleForm.ControlColorarea1">
                            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                            <InputGroup className="mb-3 ">
                                <ButtonGroup className=''>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            className={`me-2 px-4 offCanvasColorPicker${radio.value}`}
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={handleInputChange}
                                        >
                                            {radioValue === radio.value ? <i className="fa-solid fa-check"></i> : <i></i>}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="secondary" id="button-addon1"
                            // onClick={() => saveNote()}
                            >
                                Save Note
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            <Col md={{ span: 4, offset: 3 }} >
                <InputGroup className=" ">
                    <InputGroup.Text className='searchIcon pb-2' id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
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