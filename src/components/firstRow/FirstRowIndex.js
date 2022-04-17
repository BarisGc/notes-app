import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TextFilterTopBar from './subComponents/TextFilterTopBar'
import NoteContentCards from './subComponents/NoteContentCards'
import SocialMediaBar from './subComponents/SocialMediaBar'
import ColorFilterHovarableRightSideNav from './subComponents/ColorFilterHovarableRightSideNav'
import MobileColorFilterHovarableTopNav from './subComponents/mobileOnly/MobileColorFilterHovarableTopNav'

function FirstRowIndex() {
    return (
        <Row>
            <Col md={{ span: 12, offset: 0 }} className='TextFilterTopBar'>
                <TextFilterTopBar />
            </Col>

            <Col md={{ span: 12, offset: 0 }}>
                <Row>
                    <Col md={{ span: 1, offset: 0 }} className='ps-0 ms-0 d-none d-md-block'>
                        <SocialMediaBar />
                    </Col>
                    <Col xs={{ span: 12, offset: 0 }} className='p-0 m-0 d-block d-md-none'>
                        <MobileColorFilterHovarableTopNav />
                    </Col>
                    <Col md={{ span: 10, offset: 0 }}>
                        <NoteContentCards />
                    </Col>
                    <Col md={{ span: 1, offset: 0 }} className='pe-0 me-0 d-none d-md-block'>
                        <ColorFilterHovarableRightSideNav />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default FirstRowIndex