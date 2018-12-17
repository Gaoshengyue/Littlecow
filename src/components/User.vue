<template>


<div v-if="this.$store.state.token" style="margin-top: 20%">

<div style="width: 80%;,height:70%;margin-left: 10%;margin-top: 10%;background-color: white;border-radius: 10px 10px 10px 10px;padding: 3%;color: #2aabd2;">
  <strong>上传音乐</strong>
   <div class="form-group" style="margin-top: 10% ">
     <div>
    <label for="exampleInputFile" class="glyphicon glyphicon-open-file save" style="font-size: 150%;padding: 3%;border: #2aabd2 solid 2px;border-radius: 10px 10px 10px 10px;">
      <div>
      <strong  id="music-name" style="font-size: 50%"></strong>
      </div>
    </label>
    <input type="file" id="exampleInputFile" style="display: none" v-on:input="MusicSaveChange($event)">
     </div>
     <!--<div style="color: red"><strong class="glyphicon glyphicon-music">:</strong><strong id="music-name">Music Name</strong></div>-->

     <button class="btn button-save" style="margin-top: 10%;width: 100%" @click="MusicSave($event)">提交</button>
  </div>
</div>

  <div class="button-group" style="width: 100%">
   <div class="button-parrent">
     <button @click="logout" class="btn button-child">注销</button>
   </div>
  </div>

</div>
  <div v-else>
    <div style="margin-top: 20%">
      <img src="static/image/logo.png" alt="Mikl" width="100%" height="100%" class="col-lg-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-offset-2" style="width: 75%;height: 50%;">
    </div>
<div class="button-group">
   <div class="button-parrent">
     <router-link :to="{path:'/login'}" class="btn button-child"><strong style="font-size: 150%">登陆</strong></router-link>
   </div>

  <div class="button-parrent">
    <router-link :to="{path:'/register'}" class="btn button-child"><strong style="font-size: 150%">注册</strong></router-link>
   </div>

</div>
  </div>


</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      msglist: [],
      courseDetail: {
        code:null,
        username:null,
        password:null
      },
    }
  },
  mounted() {

    this.initCourseDetail()
  },
  methods: {

    initCourseDetail() {
      let that = this
      that.$store.state.select='user'
      let url =this.$store.state.apiList.auth
      this.$axios.request({
        url: url,
        method: 'GET',
        params: {
          token: this.$store.state.token
        }
      }).then(function (response) {
        that.courseDetail=response.data

      })

    },
    logout(){
     let that = this
      let url =this.$store.state.apiList.logout
      this.$axios.request({
        url: url,
        method: 'GET',
        params: {
          token: this.$store.state.token
        }
      }).then(function (response) {
        // alert(response.data)

        if (response.data.code===200){
          that.$store.commit('clearToken')
          that.$router.push({path:'/'})
        }
        else {
          alert('注销失败')
        }

      })

    },

    MusicSaveChange(e){
      $('#music-name').text($(e.target).val().split('\\')[2])
    },

    MusicSave(e){


    }



  }

}
</script>
<style scoped>
.button-group{

}
  .button-child{
    width: 50%;
    background: white;
    color: #2aabd2;

  }
  .button-save{
     width: 50%;
    background:  #2aabd2;
    color: white;

  }
  .button-parrent{
  margin-top: 10%;
  text-align: center;
  }
  .save:hover{
    color: #67b168;
  }

</style>

