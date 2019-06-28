import React from "react"
import Layout from "../components/layout"
// import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /**
             * TODO
             * Add state objects for the user inputs and anything else you may need to render the highchart.
             */
        };

    }
    render () {
      return (
          <Layout>
            <p>nothing</p>
            {/* <Button variant="primary" onClick={this.showAlert}>Primary</Button> */}
           <div>
             <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              </Accordion>
            </div>
          </Layout>
    )}
}

export default About;
