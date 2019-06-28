import React from "react"
import Layout from "../components/layout"
import photo from '../assets/goldman.jpg'
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component{
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
          <h3>Welcome</h3><p>to my personal website</p>
          <img src={photo} className="photo"></img>
         
        </Layout>
  )}
  
  
}

export default App;