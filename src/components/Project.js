import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Project({ title }) {
  return (
    <div className="Project">
        <Row>

          <Col>
            <div>
              <a
                href="www.google.com"
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
              <div data-tilt className="thumbnail rounded">
                <img src="public/mountain.jpg" alt="img" className="ProjectImg"/>
              </div>
              </a>
            </div>
          </Col>


          <Col>
            <div>
              <h3>{title}</h3>
              <div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                </p>
                {/* <p>"Info2"</p> */}
              </div>
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="ProjectBttns"
                href="www.google.com"
              >
                Source Code
              </button>

              <button
                target="_blank"
                rel="noopener noreferrer"
                className="ProjectBttns"
                href="www.google.com"
              >
                Demo
              </button>
            </div>
          </Col>


        </Row>
      </div>
  )
}