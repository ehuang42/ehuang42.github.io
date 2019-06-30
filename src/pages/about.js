import React from "react"
import Layout from "../components/layout"
import Accordion from 'react-bootstrap/Accordion'
// import Button from 'react-bootstrap/Button'
import resume from '../assets/Eva_Huang_resume.pdf'


import Card from 'react-bootstrap/Card'
// import Button from "../components/button"


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
    // 
    render () {
      return (
          <Layout>
            
              <a href={resume} download="Eva_Huang_resume">Download resume</a>

           <div>
           <br/>
             <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Education
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>Georgia Institute of Technology</h4>
                    <ul>
                      <li>Expected graduation : Spring 2021</li>
                      <li>Candidate for Bachelor of Science in Computer Science, minor in Global Development</li>
                      <li>AI and Infonetwork track</li>
                    </ul>
                    <p>
                    </p></Card.Body>
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
