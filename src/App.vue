<template>
  <div id="app">
    <div id="componentContainer">
      <QuestionBoard></QuestionBoard>
      <Footer></Footer>
    </div>    
  </div>
</template>

<script>
import Footer from './components/Footer'
import Vue from 'vue'
import QuestionBoard from './components/QuestionBoard'
import questiondata from './lib/questiondata'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    Footer,
    QuestionBoard,
  },

  data() {
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
}

#componentContainer {

}

body {
  margin: 0;
}

h1 {
  font-size: 1.7em;
}

.gray {
  color: #464646;
}

</style>
