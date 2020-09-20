<template>
  <div class="navbar nav-wrapper grid">
    <nav class="nav-extended z-depth-0 bar">
      <div class="title">
          <router-link to>
            <span class="nav-title text">MOXI.</span>
          </router-link>
      </div>
      <div class="nav-content2">
        <input class="menu-btn" type="checkbox" id = "menu-btn"/>
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        <router-link to>
          <ul id="nav-mobile" class="right hide-on-small-and-down">
            <div class="links">
              <li class="tab">
                <router-link :to="{ name: 'Index' }" class="link">
                  <a>Home</a>
                </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'Dashboard' }" class="link">
                  <a>Dashboard</a>
                </router-link>
              </li>
              <li class="tab">
                <router-link active-class="active" :to="{ name: 'SignIn' }" class="link">
                  <a>Sign In</a>
                </router-link>
              </li>
             <li class="tab">
                <router-link :to="{ name: 'SignUp' }" class="link">
                  <a>Sign Up</a>
                </router-link>
              </li>
              <li class="tab">
                <router-link to>
                  <a>Profile</a>
                </router-link>
              </li>
            </div>
          </ul>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
/* * {
  height: auto;
  width: auto;
} */

body {
  background-color: #1e1935 !important;
  color: #f0c345;
  /* overflow-y: hidden; */
}

.text {
  color: #f0c345;
}

.navbar nav {
  /* padding: 0 60px; */
  font-family: Lato, Helvetica, Arial, sans-serif;
  background-color: #1e1935;
  min-height: 100%;
  height: auto !important;
  height: 100%;
}

.nav-title {
  color: #603ce7;
  font-size: 50px;
}

.grid {
  display: grid;
  grid-template-rows: repeat(1, 1fr) !important;
  grid-template-columns: repeat(4, 1fr) !important;
}

#nav-mobile{
  padding: 30px 0px !important;
  margin-top: -120px;
  display: inline-block; 
  text-align: center;
  color: #f0c345;
  grid-column: 2/5 !important;
} 

/* mobile styles */

.navbar{
  padding: 0 60px;
  /* margin: 0px; */
  background-color: #1e1935 !important;
  font-family: Lato, Helvetica, Arial, sans-serif;
}

.nav-content2 {
  /* padding-right: 20px !important; */
  margin: 0px;
  padding: 14px 16px;
  float: right;
  background-color: #1e1935 !important;
  /* grid-row: 8/6; */
  text-align: center;
}

#nav-mobile {
  /* margin-top: -120px; */
  /* padding: 30px 10px; */
  background-color: #1e1935 !important;
  color: #f0c345;
}

/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {  

  .grid {
    display: grid;
    grid-template-rows: repeat(1, 1fr) !important;
    grid-template-columns: repeat(4, 1fr) !important;
  }

  .nav-extended {
    height: 100%;
    width: 100%;
  }

  .nav-title  {
    margin-left: -20px;
  }

  .bar {
    margin-right: -100px;
  }

  .links {
    position: fixed;
    top:0;
    right:0;
  }

  .navbar nav { 
    margin-top: -10px;
    font-family: Lato, Helvetica, Arial, sans-serif;
    width: 250%;
    margin-left: -20px;
  }

  #nav-mobile {
    background-color: #1e1935 !important;
    color: #f0c345;
    /* margin-right: 100px !important; */
    width: 80%;
    /* padding: 0px 10px; */
    /* overflow: hidden; */
  }

  .nav-content2 #nav-mobile li {
    margin-top: 0px;
    margin-right: -20px;
    /* position: fixed; */
    /* top:0; */
    /* right:0; */
    /* margin-right: -110px; */
    /* grid-column: 2/5 !important; */
    display: inline-block;
    /* overflow: hidden; */
  } 

  /* a {
    margin-right: 10px;
  } */
  .nav-content2 #nav-mobile{
    padding: 0px 10px;
    /* top:0;
    right:0; */
    /* margin-right: -110px; */
    margin-left: 100px;
    /* position: absolute; */
    /* overflow: hidden; */
  }

}

/* iPad Pro */
@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    background-color: #1e1935 !important;
    height: 100%;
    margin: 0;
  }
  
  .navbar nav {
    padding: 0 80px;
    margin-left: 20px;
    font-family: Lato, Helvetica, Arial, sans-serif;
  }

}
</style>
