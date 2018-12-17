<template>



  <div id="music" class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
    <div style="width: 80%;,height:70%;margin-left: 10%;margin-top: 10%;background-color: white;border-radius: 10px 10px 10px 10px;padding: 5%" >
      <table  class="table table-condensed" style="color: #2aabd2">
        <thead>
        <tr>
          <td>歌曲</td>
          <td>来源</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in MyMusic">
          <td :path="item.path">
            <strong>{{item.name}}</strong>
            <strong @click="MusicChange($event)" class="glyphicon glyphicon-play pull-right" :mname="item.name" ></strong>
          </td>
          <td>
            <strong>{{item.user}}</strong>
          </td>
        </tr>
        </tbody>
      </table>


    </div>

    <div style="width: 100%">
      <audio v-bind:src="'http://192.168.137.1:8000/media/'+NowPlayer.path" controls="controls" loop="loop" preload="auto" style="width: 100%;bottom: 10%;margin-left:-4%;position: fixed;height: 10%;" id="audio" autoplay="autoplay">
  </audio>
    </div>

  </div>


</template>

<script>
    export default {
        name: "Music",
         data() {
    return {
      code:null,
      MyMusic: [],
      CollectionMusic:[],
      NowPlayer:{path:'music/default.wav'},
      time:$('#audio').duration
    }
  },
       mounted() {
          this.InitGetMusic()

  },
  methods: {
    InitGetMusic(){
       var player = $("#audio")[0]; /*jquery对象转换成js对象*/

      player.pause()
        let that = this
       that.$store.state.select=''
      let url=this.$store.state.apiList.music
       this.$axios.request({
        url: url,
        method: 'GET',
        params: {
          token: this.$store.state.token
        }
      }).then(function (response) {
         that.code=response.data.code
        that.MyMusic=response.data.MyMusicList
         that.CollectionMusic=response.data.CollectionMusicList
         that.NowPlayer=response.data.MyMusicList[0]

      })
    },
    MusicChange(e){
       var player = $("#audio")[0]; /*jquery对象转换成js对象*/
      // player.pause()
      this.NowPlayer={path:$(e.target).parent().attr('path'),
      name:$(e.target).attr('mname')
      }

      $(e.target).parent().parent().siblings().children().children('.glyphicon').attr('class','glyphicon glyphicon-play pull-right')
      $(e.target).attr('class','glyphicon glyphicon-pause music-color pull-right')
      player.play(); /*播放*/

    }

  },


    }
</script>

<style scoped>
.music-color{

  color: #67b168;
}

</style>
