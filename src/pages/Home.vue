<template>
    <div>
        <Nav style="margin-top: 60px"/>
        <About/>
        <Project/>
        <Footer/>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import About from '../components/About'
import Project from '../components/Project'
import Footer from '../components/Footer'
export default {
    name: 'Home',
    props: {
        msg: String
    },
    components: {
        Nav,
        About,
        Project,
        Footer
    }
}
</script>
