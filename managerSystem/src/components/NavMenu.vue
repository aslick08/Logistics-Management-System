<template>
  <div class="navMenu">
    <el-col :span="24">
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
        <label v-for="navMenu in navMenusChild">
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
            <NavMenu :navMenus="navMenu.childs"></NavMenu>
          </el-submenu>
        </label>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props:['navMenusChild'], //接收一个数组
    data () {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){}
  }
</script>

<style scoped>
</style>
