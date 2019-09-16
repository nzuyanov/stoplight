<template>
  <div id="app">
    <header>
      <h1>Эмулятор светофора</h1>
    </header>
    <main>
      <div class="stoplight">
        <router-view></router-view>
        <sl-timer :counter="counter"></sl-timer>
      </div>
    </main>
  </div>
</template>

<script>
import slTimer from './components/sl-timer.vue'
export default {
  name: 'app',
  components: {
    slTimer
  },
  data () {
    return {
      nextScreen: '/red',
      counter: 0,
    }
  },
  mounted() {
    this.showNextScreen();
  },
  methods: {
    showNextScreen(){
      this.$router.push(this.nextScreen);
      switch (this.nextScreen){
        case '/green':
          this.counter = 15;
          this.nextScreen = '/yellow';
          break;
        case '/yellow':
          this.counter = 3;
          this.nextScreen = '/red';
          break;
        case '/red':
          this.counter = 10;
          this.nextScreen = '/green';
          break;
      }
      this.countDown();
    },
    countDown(){
      if (this.counter) {
        return setTimeout(() => {
          --this.counter;
            this.countDown()
        }, 1000)
      }
      this.showNextScreen();
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
