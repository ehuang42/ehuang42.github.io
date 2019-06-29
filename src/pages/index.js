import React from "react"
import Layout from "../components/layout"
// import Button from "react-bootstrap/Button"
// import photo from '../assets/goldman.jpg'


import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css'
import Jumbo from '../components/jumbo'

// import Jumbotron from "react-bootstrap/Jumbotron";


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
          {/* <Jumbotron>
          <h1>Welcome!</h1>
        <p>
            This is a personal website of a third year CS student at Georgia Tech,
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
          </Jumbotron> */}
        </Layout>
  )}
  
  
}

export default App;