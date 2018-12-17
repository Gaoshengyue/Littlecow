<template>
  <div class="fix">

  <div style="position: fixed;bottom: 0;left: 0" id="bottom">
  <div class="row">
      <!--<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">-->
      <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4 font" style="font-size: 150%;">
          <router-link :to="{}" class="router-font">
            <span class="glyphicon glyphicon-star">
            </span></router-link>
      </div>
        <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4  font" style="font-size: 150%;">

           <router-link :to="{path:'/'}" class="router-font" v-if="v_name==='index'" style="color: #2aabd2;">
           <span class="glyphicon glyphicon-home"></span>
           </router-link>
           <router-link :to="{path:'/'}" class="router-font" v-else style=" color: #a8a8a8;">
                <span class="glyphicon glyphicon-home"></span>
           </router-link>

      </div>
         <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4  font" style="font-size: 150%;">
                <router-link :to="{path:'/user'}" class="router-font" v-if="v_name==='user'" style="color: #2aabd2;">
           <span class="glyphicon glyphicon-user"></span>
                </router-link>
            <router-link :to="{path:'/user'}" class="router-font" v-else style="color: #a8a8a8;">
           <span class="glyphicon glyphicon-user"></span>
                </router-link>
      </div>

      <!--</div>-->
    </div>
  </div>

  </div>


</template>

<script>
export default {
  name: 'Fix',
  data() {
    return {
      msglist: [],
      courseDetail: {
        status:null,
        msg:null,
        data:null
      },
      v_name:''
    }
  },
   computed: {
     listenstage() {
       return this.$store.state.select;
     },
   },
     watch:{
    listenstage: function(ov,nv){
      console.log('watch start……');
      if(this.$store.state.select){
      this.v_name=this.$store.state.select
        }
      }

    },
}
</script>
<style scoped>
    #bottom{
      width: 100%;
      height: 10%;
      border-top: white solid 1px;
      background: white;


    }
  .font{
     padding-top: 5%;
    text-align: center;

  }
  /*.font:hover{*/


  /*}*/

  .router-font{
        color: #a8a8a8;

  }
  .router-font:hover{

        color: #2aabd2;
  }


</style>

