<template>
  <div class="navbar nav-wrapper grid">
    <nav class="nav-extended z-depth-0">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title text">MOXI.</span>
        </router-link>
      </div>
      <div class="nav-content">
        <router-link to>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li class="tab">
              <router-link :to="{ name: 'Index' }">
                <a>Home</a>
              </router-link>
            </li>
            <li class="tab">
              <router-link :to="{ name: 'Dashboard' }">
                <a>Dashboard</a>
              </router-link>
            </li>
            <li class="tab">
              <router-link active-class="active" :to="{ name: 'SignIn' }">
                <a>Sign In</a>
              </router-link>
            </li>
            <li class="tab">
              <router-link :to="{ name: 'SignUp' }">
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

#nav-mobile {
  padding: 30px 10px;
  color: #f0c345;
}

/* mobile styles */

.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.navbar{
  padding: 0 60px;
  /* margin: 0px; */
  background-color: #1e1935 !important;
  font-family: Lato, Helvetica, Arial, sans-serif;
}

.right{
  /* padding-right: 20px !important; */
  /* margin: 8px -20px; */
  background-color: #1e1935 !important;
  position: relative;
}

/* #nav-mobile {
  padding: 30px 10px;
  background-color: #1e1935 !important;
  color: #f0c345;
} */

.navbar .nav-title {
  grid-column: 1/4;
  grid-row: 1;
  padding-bottom: 10px;
  border-bottom: 3px;
}

/* .nav-content {
  padding: 0 20px 20px 20px;
} */

/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {  

  .navbar ul {
    display: none;
  }

  .navbar nav { 
    padding: 0 60px;
    font-family: Lato, Helvetica, Arial, sans-serif;
  }

  .right {
    padding-right: 20px !important;
    margin: 8px -20px;
    background-color: #1e1935 !important;
    position: relative;
  }

  #nav-mobile {
    padding: 30px 10px;
    background-color: #1e1935 !important;
    color: #f0c345;
  }

  /* .navbar ul {
    display: none;
  } */

}

/* iPad Pro */
@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    background-color: #1e1935 !important;
    height: 100%;
    margin: 0;
  }
  
  .navbar nav {
    padding: 0 60px;
    font-family: Lato, Helvetica, Arial, sans-serif;
  }

}
</style>
