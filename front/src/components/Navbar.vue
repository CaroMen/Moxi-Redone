<template>
  <div class="navbar nav-wrapper grid">
    <nav class="nav-extended z-depth-0">
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
* {
  height: auto;
  width: auto;
}

body {
  background-color: #1e1935 !important;
  color: #f0c345;
}

.text {
  color: #f0c345;
}

.navbar nav {
  padding: 0 60px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  background-color: #1e1935;
}

.nav-title {
  color: #603ce7;
  font-size: 50px;
}

 #nav-mobile{
  padding: 30px 0px !important;
  display: inline-block; 
  text-align: center;
  color: #f0c345;
} 

/* mobile styles */
/* 
.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
} */

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
  margin-top: -120px;
  padding: 30px 10px;
  background-color: #1e1935 !important;
  color: #f0c345;
}

/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {  

  template {
    background-color: #1e1935 !important;
  }
 
  .grid {
    display: grid;
    grid-template-rows: repeat(1, 1fr) !important;
    grid-template-columns: repeat(4, 1fr) !important;
  }

  .nav-title  {
    margin-left: -70px;
  }

  .navbar nav { 
    padding: 0 80px;
    margin-top: -10px;
    font-family: Lato, Helvetica, Arial, sans-serif;
    width: 250%;
    
  }

  #nav-mobile {
    background-color: #1e1935 !important;
    color: #f0c345;
  }

  .nav-content2 #nav-mobile li {
    margin-top: 0px;
    margin-right: -20px;
  } 

  #nav-mobile {
    margin-right: 0px;
    float: right;
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
