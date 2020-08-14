<template>
  <div class="navbar">
    <nav class="nav-extended z-depth-0">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title text">MOXI</span>
        </router-link>
        <router-link to>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link :to="{ name: 'Index' }">
                <a class="btn-flat text">Home</a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Dashboard' }">
                <a class="btn-flat text">Dashboard</a>
              </router-link>
            </li>
            <li>
              <router-link active-class="active" :to="{ name: 'SignIn' }">
                <a class="btn-flat text">Sign In</a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'SignUp' }">
                <a class="btn-flat text">Sign Up</a>
              </router-link>
            </li>
            <li>
              <router-link to>
                <a class="btn-flat text">Profile</a>
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
  background-color: #494832;
  color: white;
}

.text {
  color: white;
}

.navbar nav {
  padding: 0 60px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  background-color: #494832;
}

.nav-title {
  color: #d6a964;
}

#nav-mobile {
  padding: 30px 10px;
  color: white;
}

.btn-flat {
  background-color: #8e7c7a;
  border-radius: 10px;
}

.btn-floating {
  background-color: #d6a964;
}

/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {
  .navbar nav {
    padding: 0 60px;
    font-family: Lato, Helvetica, Arial, sans-serif;
  }
  #nav-mobile {
    margin-top: -255px;
    padding: 90px 70px;
    margin-left: -100px;
  }
}

/* iPad Pro */
@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .navbar nav {
    padding: 0 60px;
    font-family: Lato, Helvetica, Arial, sans-serif;
  }
  #nav-mobile {
    margin-top: -55px;
    padding: 90px 70px;
  }
}
</style>
