<template>
    <div>
        <Nav/>
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
    name: 'Dash',
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
