import React from 'react'

function SocialMediaBar() {
    return (
        <div className="icon-bar ps-0">
            <a className="facebook" href="www.facebook.com/share" ><i className="fa-brands fa-facebook"></i></a>
            <a className='twitter' href="www.twitter.com/share"><i className="fa-brands fa-twitter"></i></a>
            <a className='google' href="www.google.com/share"><i className="fa-brands fa-google"></i></a>
            <a className='linkedin' href="www.linkedin.com/share"><i className="fa-brands fa-linkedin"></i></a>
            <a className='youtube' href="www.youtube.com/share"><i className="fa-brands fa-youtube"></i></a>
        </div>
    )
}

export default SocialMediaBar