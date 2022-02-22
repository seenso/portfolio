import React from 'react';

export default function Contact() {
  return (
    <div id="Contact" className="component">

      <a href="https://www.linkedin.com/in/seenso/" target="_blank" rel="noreferrer noopener">
        <img src="http://localhost:3000/linkedin.png" className="footerIcon" alt="linkedin logo" />
      </a>

      <a href="https://github.com/seenso" target="_blank" rel="noreferrer noopener">
        <img src="http://localhost:3000/github.png" className="footerIcon" alt="github logo" />
      </a>

      <a href="icseen.medium.com" target="_blank" rel="noreferrer noopener">
        <img src="http://localhost:3000/medium.png" className="footerIcon" alt="medium logo" />
      </a>

      <a href="mailto: seenyso@gmail.com" target="_blank" rel="noreferrer noopener">
        <img src="http://localhost:3000/gmail.png" className="footerIcon" alt="gmail logo" />
      </a>

    </div>
  )
}