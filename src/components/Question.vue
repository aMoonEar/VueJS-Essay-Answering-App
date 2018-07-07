<template>
  <div id="question">
    <a href="">
      <div v-bind:class="{selected : isSelected}" 
      class="container">
        <div id="questionTitle">
          <h2><em>{{ questionTitle }}</em></h2>
        </div>

        <div v-bind:class="{itemSelected : isSelected}" 
        class="wrapper">
          <div class="item">
            <h3><strong>Cash:</strong> ${{cash}}</h3>
          </div>
          <div class="item">
            <h3><strong>Applied Scholarships: </strong> {{appliedScholarships}}</h3>
          </div>
        </div>
      </div>
    </a>
  </div>  
</template>

<script>
export default {
  name: 'Question',
  props: {
    questionTitle: {
      type: String,
    },
    cash: {
      type: Number,
    },
    appliedScholarships: {
      type: Number,
    },
    isSelected: {
      default: false,
      type: Boolean
    }
  },
  template: '<h3>{{ questionTitle }}</h3>',
  data () {
    return {
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
  padding: 0.8em;
  font-size: 0.8em;
  display: block;
  max-width: 600px;
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

#question {
  margin: 2em 0;
  padding: 0;
}

#questionTitle {
  text-align: left;
  line-height: 2em;
  margin: 0px 30px;
}

.wrapper {
  height: 6em;
  width: 100%;
}

.selected {
  background-color: #55a54e;
}

.selected h2 {
  color: white;
}

.itemSelected h3 {
  color: white;
}

.itemSelected div {
  border: 1.2px solid white !important;  
}

.wrapper div {
  border-radius: 24px 24px 24px 24px;
  -moz-border-radius: 24px 24px 24px 24px;
  -webkit-border-radius: 24px 24px 24px 24px;
  border: 1.2px solid #57a54e;
  /*background-color: #55a54e;*/
  color: #57a54e;
  display: inline-block;
  float: left;
  margin: 10px 0px 30px 30px;
  padding: 0 20px;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 1.2em;
  color: #464646;
  font-weight: 100;
}

h3 {
  font-size: 1em;
  font-weight: 100;
  text-align: center;
}

</style>
