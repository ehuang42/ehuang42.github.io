import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link className="list_link" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: "3rem auto", maxWidth: 830, padding: "0 1rem" }}>
    <header style={{ marginBottom: "1.5rem" }}>
      <Link className="coral" to="/" style={{}}>
        <h3 style={{ display: "inline" }}>Eva Huang</h3>
      </Link>
      <ul className="nav-bar" style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>    {children}
  </div>
)
