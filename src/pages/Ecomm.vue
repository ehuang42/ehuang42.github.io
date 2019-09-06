<template>
    <div class="">
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
    name: 'Ecomm',
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
<style scoped>

</style>
