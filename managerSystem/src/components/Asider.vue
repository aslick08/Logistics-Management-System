<template>
  <div class="asider">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose">
          <label v-for="navMenu in navMenus">
            <router-link :to="{ name: 'elc', params: {id:navMenu.entity.name} }">
              <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                            :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" :route="navMenu.entity.value">
                <i :class="navMenu.entity.icon"></i>
                <span slot="title">{{navMenu.entity.alias}}</span>
              </el-menu-item>
            </router-link>
            <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                        :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
              <template slot="title">
                <i :class="navMenu.entity.icon"></i>
                <span> {{navMenu.entity.alias}}</span>
              </template>
              <NavMenu :navMenusChild="navMenu.childs"></NavMenu>
            </el-submenu>
          </label>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import config from '../config'
  import NavMenu from '@/components/NavMenu'
  export default {
    name: 'Asider',
    components: {
      NavMenu
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        navMenus: null
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
      this.navMenus = config.childs
    },
    watch: {   // 使用监听的方式，监听数据的变化
      navMenus(val){
        this.list = val;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
