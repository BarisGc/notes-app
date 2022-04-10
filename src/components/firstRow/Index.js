import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddNotesOffCanvasLeftMenu from './subComponents/AddNotesOffCanvasLeftMenu'
import TextFilterTopBar from './subComponents/TextFilterTopBar'
import NoteContentCards from './subComponents/NoteContentCards'
import ColorFilterHovarableRightSideNav from './subComponents/ColorFilterHovarableRightSideNav'

function Index() {
    return (
        <>
            <Row className='mt-0 pt-0'>
                <Col md={{ span: 1, offset: 0 }}>
                    <AddNotesOffCanvasLeftMenu />
                </Col>
                <Col md={{ span: 10, offset: 0 }}>
                    <TextFilterTopBar />
                    <NoteContentCards />
                </Col>
                <Col md={{ span: 1, offset: 0 }}>
                    <ColorFilterHovarableRightSideNav />
                </Col>
            </Row>
        </>
    )
}

export default Index