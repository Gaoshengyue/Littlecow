import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://192.168.137.1:8000/user/',
      register:'http://192.168.137.1:8000/register/',
      login:'http://192.168.137.1:8000/login/',
      logout:'http://192.168.137.1:8000/logout/',
      music:'http://192.168.137.1:8000/music/',

    },
    select:''
  },
  mutations: {
    // 组件中通过 this.$store.commit(参数)  调用
    saveToken: function (state, userToken) {
      // token，保存到cookie中。
      // 用户名，保存到cookie中。
      // &
      // 将“登录” 变成用户名
      // that.$store.state.username = that.username
      state.username = userToken.name
      state.token = userToken.token

      Cookie.set("username", userToken.name, "365")
      Cookie.set("token", userToken.token, "365")
    },
    clearToken: function (state) {
      state.username = null
      state.token = null
      Cookie.remove('username')
      Cookie.remove('token')
    }
  },
})
