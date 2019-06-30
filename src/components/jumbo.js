import React from "react"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/global.css'
import containerStyles from "../styles/jumbo.module.css"


export default ({ children }) => (
    // <div className={containerStyles.div}>
    <Jumbotron className={containerStyles.jumbo}>
        {/* <h1>Welcome!</h1>
        <p>
            This is a personal website of a third year CS student at Georgia Tech,
        </p>
        <p> */}
            {/* <Button variant="primary">Learn more</Button> */}
        {/* </p> */}
    </Jumbotron>
    // </div>
  )