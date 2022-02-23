import React from 'react';

export default function About() {
  return (
    <div id="About" className="component">
      <div id="AboutContainer">
        <div id="AboutText">
          <h1>Hi, my name is Seen.</h1>
          <p>I am a fullstack software engineer based in the Pacific North West.</p>
        </div>
        <div>
          {/* <img src="./public/pnwline.png" alt="About img" id="AboutImg"/> */}
          <img src="https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg" alt="About img" id="AboutImg"/>
          
        </div>
      </div>
    </div>
  )
}