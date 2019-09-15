<template>
  <div id="app">
    <header>
      <h1>Эмулятор светофора</h1>
    </header>
    <main>
      <div class="stoplight">
        <div class="stoplight__container">
          <sl-colorbox color="green"></sl-colorbox>
          <sl-colorbox color="yellow"></sl-colorbox>
          <sl-colorbox color="red"></sl-colorbox>
        </div>
        <div class="stoplight__timer">timer</div>
      </div>
    </main>
  </div>
</template>

<script>
import slColorbox from './components/sl-colorbox.vue'
export default {
  components: {
    slColorbox
  },
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
