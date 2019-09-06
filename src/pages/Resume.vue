<template>
    <div>
        <Nav/>
		<div id="colorlib-services">
			<div class="container">
				<div class="row text-center">
					<h2 class="bold">Resume</h2>
				</div>
                <div class="services-flex">
                        <div class="row">
                            <div class="col-md-12 col-md-offset-0 animate-box intro-heading">
                                <span>Resume</span>
                                <p><a href='https://drive.google.com/file/d/1SEJ9sJq64Fr5P6tG7zGqlJjVyiKKpGYo/view?usp=sharing' target='_blank' class="btn btn-primary btn-outline">Download PDF</a></p>
                            </div>
                        </div>
                        <div class="row">
                        <div class="services animate-box" style="font-size: 18px">
                                <div class="col-md">
                                    <p>Education : <b>Georgia</b> Institute of <b>Tech</b>nology</p>
                                </div>
                                <div class="col-md">
                                    <ul>
                                        <li>Graduate Date: Spring 2021</li>
                                        <li>Bachelor of Science in Computer Science</li>
                                        <li>GPA: 3.7</li>
                                    </ul>
                                <!-- <img src="../assets/gt.png" style="height: 150px; width: auto;"> -->
                            </div>
                            </div>
                        <div class="row">
                            <div class="services animate-box" style="font-size: 18px; padding: 40px">
                                <div class="col-md" style="margin-top: -60px">
                                        <p>Professional Experience :</p>
                                        <div class="row" style="padding-top: 60px">
                                            <div class="col-md-4 col-sm-5" style="">
                                                 <a href="https://home.stackfolio.com/" target='_blank'>
                                                        <img src="../assets/stackfolio.png" style="height:auto; width: 200px;">
                                                </a>
                                                <p><a href='/' style="margin-top:20px" class="btn btn-primary btn-outline">View projects!</a></p>
                                            </div>
                                            <div class="col-8">
                                                <p style="color: #58b368; font-size: 20px">Company: Stackfolio</p>
                                                <p style="font-style: italic;">Established startup aims at powering whole loan trading with Machine learning at online marketplace</p>
                                                <p>Position: <b> QA </b>Intern</p>
                                                <p>Date: <b>Aug. 2019 </b>to<b> present</b></p>
                                            </div>
                                            <div class="col-12 border" style="padding-top: 30px">
                                                <p className='smalltext'>
                                                <ul>
                                                <li>Working with dev team using JIRA to deliver products with optimal user experience</li>
                                                <li>Write up testing results and user acceptance log</li>
                                                </ul>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-4 col-sm-5" style="">
                                                <a href="https://www.ohbottech.com" target='_blank'>
                                                    <img src="../assets/logo_white.png" class="image-ob" style="height:150px; width: auto;">
                                                </a>
                                                <p><a href='/' style="margin-top:20px" class="btn btn-primary btn-outline">View projects!</a></p>

                                            </div>
                                            <div class="col-8">
                                                <p style="color: #009bef; font-size: 20px">Company: OH!Bot</p>
                                                <p style="font-style: italic;">New startup focusing on AI powered chatbot as CRM tool for small businesses</p>
                                                <p>Position: <b> Software Engineering </b>Intern</p>
                                                <p>Date: <b>June 2019 </b>to<b> Aug. 2019</b></p>
                                            </div>
                                            <div class="col-12 border" style="padding-top: 30px; border: 3px">
                                                <p className='smalltext'>
                                                <ul>
                                                <li>Developed modular front-end and back-end applications using HTML, CSS, VueJS, AJAX, NodeJS, deployed applications visited regularly for vendor to manage 1000+ active users of their brand. </li>
                                                <li>Worked closely with 2 business vendors to deliver custom chatbot functions and user experience</li>
                                                <li>Frequently used tools: Postman API, Element UI, MongoDB compass, AWS service</li>
                                                </ul>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="row" style="padding-top: 60px">
                                            <div class="col-md-4 col-sm-5" style="">
                                                 <a href="https://home.stackfolio.com/" target='_blank'>
                                                        <img src="../assets/coc.png" style="height:auto; width: 200px;">
                                                </a>
                                            </div>
                                            <div class="col-8">
                                                <p style="color: #e6b31e; font-size: 20px">College of Computing</p>
                                                <!-- <p style="font-style: italic;"></p> -->
                                                <p>Position: <b> CS </b>Tutor</p>
                                                <p>Date: <b>Aug. 2018 </b>to<b>May 2019</b></p>
                                            </div>
                                            <div class="col-12 border" style="padding-top: 30px">
                                                <p className='smalltext'>
                                                <ul>
                                                <li>Covered courses: Intro to Computing, Intro to OOP, Data Structure and Algorithm</li>
                                                <li>Communicate technical topics with Oracle tutorials and self-coded example Java classes</li>
                                                <li>View sample cases I use on <a href="https://github.com/ehuang42/OOPTutoring">github</a></li>
                                                </ul>
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="col-md">
                                </div>
                            </div>
                        </div></div>
		</div>
        <Footer/>
        </div>
		
</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import Project from '../components/Project'

export default {
    name: 'Home',
    props: {
        msg: String
    },
    components: {
        Nav,
        Footer
    },
    
}
</script>
<style scoped>
.border {
    border-style: solid;
    border-width: 5px;
    border-color: black;
}
.img :hover {
    /* background-color: aqua;
     */
     opacity: 0.2;
}
</style>