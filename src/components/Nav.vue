<template>
<div>
  <header>
      <div style="padding-left:50px; padding-right:50px;">
        <b-navbar toggleable="lg" type="light" fixed="top" style="background-color: #efe9e9">
          <b-navbar-brand href="/">Eva Huang</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav >
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item right href="/resume">Resume</b-nav-item>
              <b-nav-item-dropdown right>
                <template slot="button-content"><em>Portfolio</em></template>
                <b-dropdown-item href="/ohbot-website">Website rennovation</b-dropdown-item>
                <b-dropdown-item href="/ohbot-ecommerce">E-commerce Module</b-dropdown-item>
                <b-dropdown-item href="/ohbot-dashboard">Logistics Dashboard</b-dropdown-item>

              </b-nav-item-dropdown>
               <b-nav-item right href="#contact">Contact</b-nav-item>
                <b-nav-item right href="https://github.com/ehuang42" target='_blank'>Github</b-nav-item>
            </b-navbar-nav>
            
          </b-collapse>
        </b-navbar>
      </div>
    </header>
</div>
</template>
  
<script>
export default {
    name:'nav',
    props: {

    }
}
</script>

<style scoped>
.contain {
  margin: 70px;
  padding-left: 30px;
  padding-right: 30px;
}
</style>