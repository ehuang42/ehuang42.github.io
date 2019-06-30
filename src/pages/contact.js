import React from "react"
import Layout from "../components/layout"
import Image from 'react-bootstrap/Image'
import Linkedin from '../assets/linkedin.png'


class Contact extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          /**
           * TODO
           * Add state objects for the user inputs and anything else you may need to render the highchart.
           */
      };

  }
  clickLi() {
    window.open('https://www.linkedin.com/in/ehuang42/');
  }
  // 
  render () {
    return (
      <Layout>
      <div style={{ color: `teal` }}>
      <h4>Send Eva and email!</h4>
      <img src='../assets/linkedin.png' alt=''></img>
        <p>
          <a href="mailto:ehuang42@gatech.edu">ehuang42@gatech.edu</a>
        </p>    
        
        <Image onClick={this.clickLi} src={Linkedin} fluid roundedCircle/>
  
      </div>
      
    </Layout>
  )}
}

export default Contact;
