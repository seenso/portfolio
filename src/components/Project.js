import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Project() {
  return (
    <div className="Project">
        <Row>

          <Col lg={8} sm={12}>
            <div>
              <a
                href="www.google.com"
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
              <div data-tilt className="thumbnail rounded">
                <img src="http://localhost:3000/mountain.jpg" alt="img" className="ProjectImg"/>
              </div>
              </a>
            </div>
          </Col>


          <Col lg={4} sm={12}>
            <div>
              <h3>Project Title</h3>
              <div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                </p>
                <p className="mb-4">"Info2"</p>
              </div>
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="ProjectBttns"
                href="www.google.com"
              >
                See Live
              </button>

                <button
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ProjectBttns"
                  href="www.google.com"
                >
                  Source Code
                </button>
            </div>
          </Col>


        </Row>
      </div>
  )
}