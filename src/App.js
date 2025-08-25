import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import pic from './assets/Al-Quresh.png';
import Button from './button';


function App() {
  return (
    <div className="w-100 h-100 background text-white overflow-x-hidden">
      <nav className="navbar navbar-expand-lg background py-4">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold title col-lg-6  " href="#" >
            Port<span style={{ color: '#7cf03d' }}>folio.</span>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ps-5 pb-2 pb-lg-0 col-lg-8 gap-3">
              <li className="nav-item">
                <a className="nav-link active home" href="#" style={{ color: '#7cf03d' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row align-items-center sec1" style={{ height: '400px' }}>
        <div className="col-lg-7  ">
          <h1 className="fw-semibold muneeb">Muneeb Ahmad </h1>
          <h2 className='developer'> Frontend Developer</h2>
          <p className="pt-3 tagline">Crafting modern, responsive, and engaging web interfaces using React, Tailwind CSS, and JavaScript to deliver seamless user experiences.</p>
          <div className="icons row gap-2 pt-3 pb-4 d-flex ">
            <div className="col-auto">
            <Button text="View my work" link="#projects" />
            </div>
          </div>
        </div>
        <div className='col-lg-5 d-flex justify-content-center'>
          <div className="pic" style={{ backgroundImage: `url(${pic})` }}></div>
        </div>
      </div>
      <hr className='hr1' />

      {/* about section */}

      <div className="row" id="about">
        <h2 className="text-center heading " style={{ color: '#7cf03d', fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>About</h2>
        <div className="row about" >
          <div className='col-lg-6 '>
            <p className=' pt-1 fs-6 '>
              My name is Muneeb Ahmad, and I am a BS Computer Science student and passionate Frontend Web Developer with 1+ years of experience. I have extensive hands-on experience with Core JavaScript, React, HTML, CSS, Bootstrap, and Tailwind CSS, having built multiple projects that are responsive and mobile-friendly. <br /> <br />
              I am highly skilled in React and very comfortable working with Tailwind CSS, enabling me to create modern, visually appealing, and efficient web interfaces. I also have strong knowledge of Git and GitHub, which allows smooth team collaboration and seamless code sharing. <br /> <br />
              I enjoy turning ideas into clean, functional, and user-friendly web applications, delivering both performance and excellent user experience. <br />
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="d-flex flex-column align-items-center rounded-4 mb-5"
              style={{ width: '300px', height: 'auto', border: '2px solid #7cf03d', padding: '10px' }}
            >
              <h4
                className="text-center text-white px-3 py-2 rounded-5"
              >
                My Skills
              </h4>

              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <Button text="HTML" link="/path-to-cv.pdf" />
                <Button text="CSS" link="/path-to-cv.pdf" />
                <Button text="JS" link="/path-to-cv.pdf" />
                <Button text="Bootstrap" link="/path-to-cv.pdf" />
                <Button text="React" link="/path-to-cv.pdf" />
                <Button text="Tailwind" link="/path-to-cv.pdf" />
                <Button text="Git" link="/path-to-cv.pdf" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* experience section */}

      <h2 className="text-center heading " style={{ color: '#7cf03d', fontFamily: 'Roboto, sans-serif', fontWeight: 700 }} id="experience">Experience</h2>
        <div className='exp'>
          <h4><b>Frontend Web Developer — ShahparzSoft</b></h4>
          <h5>Feb 2025 – Apr 2025</h5>
          <p>Developed and maintained multiple responsive websites using <b>HTML, CSS, JavaScript, and React.</b> <br/>

Implemented modern UI designs with Bootstrap to ensure cross-browser compatibility and mobile responsiveness.<br/>

Built reusable components in React to optimize development speed and maintainability. <br/>

Gained hands-on experience in creating user-friendly and visually appealing web layouts.</p>
        </div>
      <hr />
        <div className='exp'>
          <h4><b>Frontend Web Developer — SunzTech</b></h4>
          <h5>Apr 2025 – May 2025</h5>
          <p>Worked on real-world projects using <b>React and Tailwind CSS</b>, gaining strong expertise in utility-first CSS. <br/>

Built responsive and animated interfaces with advanced frontend features. <br/>

Improved performance and usability by optimizing components and applying best coding practices. <br/>

Enhanced knowledge of modern frontend frameworks while collaborating on team projects.</p>
        </div>
      <hr />
        <div className='exp'>
          <h4><b>Frontend Web Developer — Lab D Tech</b></h4>
          <h5>Jun 2025 – Present</h5>
          <p>Developing JavaScript-based projects including quiz applications using <b>core JavaScript and React.</b> <br/>

Created a custom Emoji Picker library in React. <br/>

Experienced in debugging, troubleshooting, and resolving frontend errors effectively. <br/>

Continuously working on React-based projects to build scalable and maintainable applications.</p>
        </div>
    
      <hr />

      {/* project section */}
  
      <div className='row' id="projects">
        <h2 className="text-center  heading " style={{ color: '#7cf03d', fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>My Projects</h2>

      </div>
      <div className='d-flex justify-content-center flex-wrap gap-5 pb-5'>
        <div className='text-center rounded-3' style={{ width: '300px', height: '300px', border: '3px solid #7cf03d', backgroundColor: '#1f242d' }}>
          <h4 className='py-4' style={{ backgroundColor: '#7cf03d', color: '#1f242d' }}>React Emoji Picker</h4>
          <small className='py-4  d-block'>Built a feature-rich Emoji Picker app using React and Tailwind CSS with emoji search, category-wise browsing, dark/light mode toggle, and one-click copy functionality.</small>
          <Button text="View Project" link="https://muneeb648.github.io/NDA/" />
        </div>
        <div className='text-center rounded-3' style={{ width: '300px', height: '300px', border: '3px solid #7cf03d', backgroundColor: '#1f242d' }}>
          <h4 className='py-4' style={{ backgroundColor: '#7cf03d', color: '#1f242d' }}>Educational Quiz</h4>
          <small className='py-4  d-block'>Developed a Core JavaScript quiz app with teacher and student modules, featuring voice-based questioning, guided tutorial video, and paragraph-based answer validation.</small>
          <Button text="View Project" link="https://muneeb648.github.io/teacher-side/" />
        </div>
        <div className='text-center rounded-3' style={{ width: '300px', height: '300px', border: '3px solid #7cf03d', backgroundColor: '#1f242d' }}>
          <h4 className='py-4' style={{ backgroundColor: '#7cf03d', color: '#1f242d' }}>Appexes – Responsive UI</h4>
          <small className='py-4  d-block'>Created the responsive Front-End design of Appexes from Figma prototypes, delivering a modern, user-friendly interface optimized for all devices.</small>
          <Button text="View Project" link="https://muneeb648.github.io/Appexes-Responsive-UI-Site/index.html" />
        </div>
      </div>
      <hr />

      <div className='row' id="contact">
        <div className='text-center '>
          <h2 className="text-center  heading " style={{ color: '#7cf03d', fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>Contact me</h2>
          <div className='d-flex flex-wrap gap-5 justify-content-center pb-5'>
            <Button text="Email" link="https://mail.google.com/mail/u/0/?fs=1&to=muneebqureshi2600@gmail.com&tf=cm" />
            <Button text="GitHub" link="https://github.com/Muneeb648" />
            <Button text="Phone" link="https://wa.me/923121757627?text=Hello%20Muneeb,%20I%20saw%20your%20portfolio!" />
             <Button text="LinkedIn" link="https://www.linkedin.com/in/muneeb-ahmad-aa198335a/" />
          </div>
        </div>
        <hr />
      </div>



      <div className='text-center w-100 py-1'>
        <p>© 2025 Muneeb Ahmad | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App
