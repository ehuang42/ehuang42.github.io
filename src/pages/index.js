import React from "react"
import Layout from "../components/layout"
import photo from '../assets/goldman.jpg'

export default () => (
  <Layout>
  <div style={{ margin: "3rem auto", maxWidth: 750 }}>
  <p id="demo"></p>
    <section id="setion03">
      <h1>I'm a third year CS major</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img src={photo} className="avatar" alt=""></img>
      <a href="#sec_2"><span></span>Scroll</a>
    </section>

    <section id="sec_2">
    </section>
  </div>
  </Layout>
)


