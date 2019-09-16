<template>
  <div id="app">
    <header>
      <h1>Эмулятор светофора</h1>
    </header>
    <main>
      <div class="stoplight">
        <router-view></router-view>
        <div class="stoplight__timer">timer</div>
      </div>
    </main>
  </div>
</template>

<script>
//import slContainer from './components/sl-container.vue'
export default {
  //components: {
  //  slContainer
  //},
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
