import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default ({ children }) => (
  // nav bar on top
  <div style={{ margin: `3rem auto`, maxWidth: 8000, padding: `0 2rem` }}>
    <Navbar bg="light" variant="light" className="nav">
        <Navbar.Brand href="/">Eva Huang</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about/">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar>
    {children}
    </div>
)
