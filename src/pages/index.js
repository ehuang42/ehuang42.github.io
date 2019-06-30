import React from "react"
import Layout from "../components/layout"
// import Button from "react-bootstrap/Button"

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css'
// import Image from 'react-bootstrap/Image'
import Jumbo from "../components/jumbo";

class App extends React.Component {
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
          <Jumbo>

          </Jumbo>
        </Layout>
  )}
  
  
}

export default App;