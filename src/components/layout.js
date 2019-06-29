import React from "react"
import Nav from 'react-bootstrap/Nav'
import '../styles/global.css'


export default ({ children }) => (
  // nav bar on top
  <div style={{ margin: `3rem auto`, maxWidth: 8000, padding: `0 2rem` }}>
    <Nav className="justify-content-end" href='/'>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/about'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/contact'>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    {children}
    </div>
)
