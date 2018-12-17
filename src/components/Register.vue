<template>
    <div class="demo">
    <div style="margin-top: 10%">
      <img src="static/image/logo.png" alt="Mikl" width="20%" height="20%" class="col-lg-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-offset-2" style="width: 75%;height: 50%;">
    </div>

<div class="form-2">
			<h1><span class="sign-up">Sign up</span></h1>
			<p class="float">
				<label for="register"><i class="icon-user"></i>Username</label>
				<input type="text" id="register" placeholder="Username">
			</p>
			<p class="float">
				<label for="password"><i class="icon-lock"></i>Password</label>
				<input type="password" id="password" placeholder="Password" class="showpassword">
			</p>
			<p class="clearfix">
        <button class="log-twitter" style="width: 100%" @click="registry">Register</button>
			</p>
		</div>​​
</div>

</template>

<script>
    export default {
        name: "Register",
       mounted() {
  },
  methods: {

    registry () {
      var that=this

     this.$axios.request({
        url: this.$store.state.apiList.register,
        method: 'POST',
        data: {
          name: $('#register').val(),
          pwd:$('#password').val()
        }
      }).then(function (response) {
        // alert(response.data)

        if (response.data.code===200){
          that.$store.commit('saveToken',response.data)
          that.$router.push({path:'/user'})
        }
        else{

          alert('登录失败')
        }

      })
    },
  },


    }
</script>

<style scoped>
.input-familly{
   text-align: center;
}
.input-head{

  background: white;
  color: #2aabd2;
}

</style>
