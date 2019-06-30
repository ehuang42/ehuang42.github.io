import React from "react"
import Layout from "../components/layout"

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css'
// import Image from 'react-bootstrap/Image'
import Jumbo from "../components/jumbo";
// import Button from "../components/button";

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

          <p>
            If life is too short, make some meaningful connections today!
          </p>

          <h5>My life</h5>
          {/* <Button>
            
          </Button> */}
          
        </Layout>
  )}
  
  
}

export default App;