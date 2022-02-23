import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <div id="Footer">
      <Navbar expand="lg" className="navbar">
        <img src="https://res.cloudinary.com/icseen/image/upload/v1645580227/smalllogo_ggccac.png" id="nav-logo" alt="Logo in Footer"/>
        <p className="footer__text">
          © {new Date().getFullYear()} - Portfolio developed by Seen So
        </p>
        <Container className="footerIconContainer">
          <Nav className="me-auto">
            {/* keep this nav so icons render on right side */}
          </Nav>

          <a href="https://www.linkedin.com/in/seenso/" target="_blank" rel="noreferrer noopener">
            <img src="https://res.cloudinary.com/icseen/image/upload/v1645580227/linkedin_bck9oc.png" className="footerIcon" alt="linkedin logo" />
          </a>

          <a href="https://res.cloudinary.com/icseen/image/upload/v1645580226/github_u8dpn8.png" target="_blank" rel="noreferrer noopener">
            <img src="public/github.png" className="footerIcon" alt="github logo" />
          </a>

          <a href="icseen.medium.com" target="_blank" rel="noreferrer noopener">
            <img src="https://res.cloudinary.com/icseen/image/upload/v1645580227/medium_eqtykx.png" className="footerIcon" alt="medium logo" />
          </a>

          <a href="mailto: seenyso@gmail.com" target="_blank" rel="noreferrer noopener">
            <img src="https://res.cloudinary.com/icseen/image/upload/v1645580226/gmail_smv6x0.png" className="footerIcon" alt="gmail logo" />
          </a>
        </Container>
    </Navbar>
    </div>
  )
}