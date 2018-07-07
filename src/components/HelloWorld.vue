<template>
  <div class="helloworld">

   
    <div class="center">
      <div id="titleDiv">
        <h1><strong>Welcome to your Master Application!</strong></h1>
      </div>

      <div id="descriptionDiv">
        <h2>Here you can select which essays to fill out, and apply to as many scholarships as you can</h2>
      </div>
        
        <button class="btn">Get started!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.left {
  text-align: left;
}

h2 {
  font-weight: normal;
}

#titleDiv {
  line-height: 3em;
}

#descriptionDiv {
  padding: 1.5em 0em;
}

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 2em;
  width: 20em;
}

  @media screen and (max-width: 500px) {
    .center {
      width: 85%;
    }
  }

.btn {
  -webkit-border-radius: 12;
  -moz-border-radius: 12;
  border-radius: 12px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #1ea964;
  border: 2px solid #1ea964;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  width: 100%;
}

.btn:hover {
  background: #32b674;
  border: 2px solid #1ea964;
  background-image: -webkit-linear-gradient(top, #32b674, #1ea964);
  background-image: -moz-linear-gradient(top, #32b674, #1ea964);
  background-image: -ms-linear-gradient(top, #32b674, #1ea964);
  background-image: -o-linear-gradient(top, #32b674, #1ea964);
  background-image: linear-gradient(to bottom, #32b674, #1ea964);
  text-decoration: none;
}

</style>
