<template>
    <div class="demo">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="navbar">Menu
					<ul class="menu">
						<li><router-link :to="{path:'/music'}" class="glyphicon glyphicon-headphones" style="color: #2aabd2"></router-link></li>
						<li><a href="#" class="glyphicon glyphicon-book" style="color: #2aabd2"></a></li>
						<li><a href="#" class="glyphicon glyphicon-film" style="color: #2aabd2"></a></li>
					</ul>
				</div>
			</div>

       <div class="col-md-12">
      <img src="static/image/font.png" alt="Red lighting" width="120%" height="120%" class="col-lg-offset-0 col-sm-offset-0 col-xs-offset-0 col-md-offset-0" style="width: 91.5%">

    </div>
		</div>
	</div>
</div>


</template>

<script>
    export default {
        name: "index",
       mounted() {
    this.initCourseDetail()
  },
  methods: {

    initCourseDetail() {
      let that = this
      that.$store.state.select='index'
    },
  },


    }
</script>

<style scoped>
.navbar{

  color: #2aabd2
}

</style>
