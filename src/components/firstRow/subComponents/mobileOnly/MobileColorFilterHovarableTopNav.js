import { useSelector, useDispatch } from 'react-redux';
import { selectFilterOption } from '../../../../redux/notesSlice'
import { Col, Row } from 'react-bootstrap'
function MobileColorFilterHovarableTopNav() {
    const dispatch = useDispatch();

    const filterTypes = useSelector((state) => state.notes.filterTypes);

    const handleColorFilter = (e) => {
        dispatch(selectFilterOption(
            {
                ...filterTypes,
                colorFilter: e.target.name
            }))
    }

    return (
        <Row xs={4} id="myTopNav" className="myTopNav g-0 my-0 px-1">
            <Col  >
                <button href="#" name='routine' className="routine" onClick={handleColorFilter}>Routine</button>
            </Col>
            <Col>
                <button href="#" name='projects' className="projects" onClick={handleColorFilter}>Projects</button>
            </Col>
            <Col>
                <button href="#" name='urgent' className="urgent" onClick={handleColorFilter}>Urgent</button>
            </Col>
            <Col>
                <button href="#" name='ideas' className="ideas" onClick={handleColorFilter}>Ideas</button>
            </Col>
        </Row >
    )
}

export default MobileColorFilterHovarableTopNav