<template>
  <div class="footer">

      <div class="container">
        
        <div class="left" id="footlogo">
          <a href="http://scholarme.co">
            <img src="../assets/logo-white.png">
          </a>
        </div>

        <div id="footnavcontainer">
          <div class="white" id="footnav">
            <ul>
              <li><a href=""><p>Home</p></a></li>
              <li><a href=""><p>About us</p></a></li>
              <li><a href=""><p>Blog</p></a></li>
            </ul>
          </div>
        </div>
      </div>
    
      <div class="darkblue" id="address">
        <p><em>968 60th St Brooklyn, NY 11208</em></p>
      </div>
      <div class="darkblue" id="copyright">
        <p>Copyright © 2018 SCHOLARME. All rights reserved</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.white {
  color: white;
}

.darkblue {
  color: #6b7788;
}

.container {
  width: 100%;
  height: 40%;
}

.left {
  float: left;
}

#footnavcontainer {
  float: right;
}

#footnav {
  margin-right: 1.5em;
}

#footlogo {
  margin: 1.3em 1.5em;
}

#footnav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footnav li {
  padding: 0 0.5em;
  float: left;
}

#footnav a {
  text-decoration: none;
  color: white;
}

.footer {
  background-color: #273343;
  width: 100%;
  height: 8em;
  position: static;
  left: 0;
  color: white;
  text-align: center;
  margin-top: 6em;
}

</style>
