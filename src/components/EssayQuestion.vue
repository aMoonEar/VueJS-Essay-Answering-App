<template>
  <div id="essayquestion">
      <div class="container">
        <div id="questionTitle">
          <h1><strong>{{ questionTitle }}</strong></h1>
        </div>

        <textarea-autosize v-model="response" resized="onResized" name="" class="textbox"></textarea-autosize>
      </div>
  </div>  
</template>

<script>
import Vue from 'vue' 
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

export default {
  name: 'EssayQuestion',
  components: {
  },
  props: {
    questionTitle: {
      type: String,
    },
    isSelected: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      response: ""
    }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  border: none;
  font-size: 0.8em;
  padding: 2em 4em;
  height: 100%;
  display: block;
  background-color: white;
  -webkit-box-shadow: 0px 0px 4px 0.5px rgba(184,184,184,0.68);
  -moz-box-shadow: 0px 0px 4px 0.5px rgba(184,184,184,0.68);
  box-shadow: 0px 0px 4px 0.5px rgba(184,184,184,0.68);
  @border;
  transition: box-shadow 0.2s ease;

  transition:0.2s ease;-moz-transition:0.5s ease;-webkit-transition:0.5s ease;
}

.container:hover { -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75); }

#essayquestion {
  margin: 2em 0;
  padding: 0;
}

#questionTitle {
  text-align: justify;
  line-height: 2em;
  display: block;
}

.textbox {
  padding: 2em;
  box-sizing: border-box;
  width: 100%;
  display: block;
  font-size: 1.2em;
  line-height: 2em;
  color: #5b5b5b;
  border: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.textbox:focus, input:focus {
  outline: none;
}

h1 {
  color: #414141;
}


</style>
