<template>
    <div class="demo">
    <div style="margin-top: 10%">
      <img src="static/image/logo.png" alt="Mikl" width="20%" height="20%" class="col-lg-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-offset-2" style="width: 75%;height: 50%;">
    </div>

<div class="form-1">
			<p class="field">
				<input type="text" id="login" placeholder="Username">
				<i class="icon-user icon-large glyphicon glyphicon-sunglasses"></i>
			</p>
				<p class="field">
					<input type="password" id="password" placeholder="Password">
					<i class="icon-lock icon-large glyphicon glyphicon-lock"></i>
			</p>
			<p class="submit">
				<button type="submit"  class="glyphicon glyphicon-tint" @click="login" ><i class="icon-arrow-right icon-large"></i></button>
			</p>
		</div>
</div>


</template>

<script>
    export default {
        name: "Login",
       mounted() {
  },
  methods: {

    login () {
      var that=this
       this.$axios.request({
        url: this.$store.state.apiList.login,
        method: 'POST',
        data: {
          name: $('#login').val(),
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
