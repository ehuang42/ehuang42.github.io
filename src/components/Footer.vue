<template>
    <div>
        <section id="contact">
    <footer>
			<div id="footer" style="background-color: #efe9e9">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<p style="font-size: 36px"> Get In Touch! </p>
                            <p>
                            <ul class="social-icons">
                                <li><a class="linkedin" href="https://www.linkedin.com/in/ehuang42/"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="github" href="https://github.com/ehuang42"><i class="fa fa-github"></i></a></li>
                                <li><a class="dribbble" href="mailto:ehuang42@gatech.edu"><i class="fa fa-envelope"></i></a></li>
                            </ul></p>
                            <p>
								Content &copy;, with <i class="icon-heart4" aria-hidden="true"></i> by Eva
							</p>
						</div>
					</div>
				</div>
			</div>
            <!-- <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"> -->
		</footer></section>
	</div>
</template>

<script>
export default {
    name: 'Footer',

}
</script>
<style>
.social-icons
{
  text-align:center
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons {
  width:40px;
  height:40px;
  display: inline;
  line-height:40px;
  /* margin-left:0px; */
  margin-right:0;
  border-radius:100%;
  /* background-color: #c8cec8; */
}
.social-icons li
{
  display:inline;
  margin-bottom:4px;
}

.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color: #5f1854;
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#FF5A5A
}
</style>