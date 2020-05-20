<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside>
          <Asider></Asider>
        </el-aside>
        <el-container>
          <el-main>
            <Content></Content>
          </el-main>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Asider from '@/components/Asider'
  import Content from '@/components/Content'
  import Header from '@/components/Header'
  export default {
    name: 'Home',
    components: {
      Asider,
      Content,
      Header
    },
    data () {
      return {
        msg: 'Welcome to Enter',
        totalList: []
      }
    },
    watch:{},
    created(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    height: 100%;
    width: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
