<template>
    <div>
        <Nav/>
        <div class="banner" style="justify-content: center; text-align: center">
            <p class="title"> Renovating Company Website
                <br><a href="https://www.ohbottech.com/" class="btn btn-primary btn-outline">Live Website</a></p>
            <!-- <p></p> -->

        </div>
        <div class="container">
        <div class="row">
                <div class="col center" >
                    <img src="../assets/front.png" style="" class="shadow image">
                </div>
                <div class="col">
                    <p class="center bullet">Challenge</p>
                    <p class="detail">The startup company OH!Bot I interned at over the summer decided to change their marketing strategies.</p>
                    <p class="center bullet">Solution</p>
                    <p class="detail">Redesign the UX flow of our official website -> <br><mark>rebuild the website</mark></p>
                    <p class="center bullet">My Role </p>
                    <p class="detail">Coordinate with UIUX designer and marketing strategists and clients to deliver final product.</p>
                    
                    
                
                
                
                </div>
                
        </div>
        <hr>
        <div class="row">
                <div class="col">
                    <p class="center bullet">Personal Takeaway</p>
                    <p class="detail center"> The startup company OH! Bot I interned at over the summer decided to change their marketing strategies.</p>

                </div>
        </div>
        </div>
        <!-- <Project/> -->
        <!-- hidding -->
        <Footer/>
    </div>
</template>

<script>
import Nav from '../components/Nav'
import Project from '../components/Project'
import Footer from '../components/Footer'
export default {
    name: 'website',
    props: {
        msg: String
    },
    components: {
        Nav,
        Project,
        Footer
    }
}
</script>
<style scoped>
.detail {
    font-size: 18px;
    color: gray;
}
.shadow {
    box-shadow: 9px 15px 5px 0px rgba(214,214,214,1);
}
.bullet {
    /* padding-top: 10px; */
    font-size: 24px;
    color: #494949;
    font-weight: 700;
}
.center {
    justify-content: left; 
    text-align: left;
}
.banner {
    line-height: 700px;
    background-color: #f2f2f2;
    justify-content: center; 
    text-align: center;
}

@media (min-width: 400px) {
    .banner {
        line-height: 200px;
    }
    .image { 
        height: auto; width: 400px;
    }
    .title {
        font-size: 28px;
        padding-top: 60px;
    }
}
@media (min-width: 700px) {
    .banner {
        line-height: 200px;
    }
    .image {
        height: auto; width: 600px;
    }
    .title {
        font-size: 48px;
        padding-top: 60px;
    }
}
@media (max-width: 400px) {
    .banner {
        line-height: 200px;
    }
    .image {
        height: auto; width: 350px;
    }
    .title {
        font-size: 24px;
        padding-top: 60px;
    }
}
</style>