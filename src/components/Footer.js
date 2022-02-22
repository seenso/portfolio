import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <div id="Footer">
      <Navbar expand="lg" className="navbar">
        <img src="http://localhost:3000/SmallLogo.png" id="nav-logo" alt="Logo in Footer"/>
        <a href="https://www.linkedin.com/in/seenso/" target="_blank" rel="noreferrer noopener">
          <img src="http://localhost:3000/linkedin.png" className="footerIcon" alt="linkedin logo" />
        </a>
        <a href="https://github.com/seenso" target="_blank" rel="noreferrer noopener">
          <img src="http://localhost:3000/github.png" className="footerIcon" alt="github logo" />
        </a>
        <a href="icseen.medium.com" target="_blank" rel="noreferrer noopener">
          <img src="http://localhost:3000/medium.png" className="footerIcon" alt="github logo" />
        </a>
        <a href="mailto: seenyso@gmail.com" target="_blank" rel="noreferrer noopener">
          <img src="http://localhost:3000/gmail.png" className="footerIcon" alt="gmail logo" />
        </a>
    </Navbar>
    </div>
  )
}