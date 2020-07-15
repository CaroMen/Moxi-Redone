<template>
  <div class="navbar">
    <nav class="nav-extended amber lighten-4">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title teal-text">MOXI</span>
        </router-link>
        <router-link to>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link :to="{ name: 'Index' }">
                <a class="waves-effect waves-dark btn">Home</a>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'SignIn' }">
                <a class="waves-effect waves-dark btn">Sign In</a>
              </router-link>
            </li>
            <li>
              <a class="waves-effect waves-dark btn">Sign Up</a>
            </li>
          </ul>
        </router-link>
        <a href class="btn-floating btn-large halfway-fab teal">
          <router-link to>
            <i class="material-icons">account_circle</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar nav {
  padding: 0 60px;
  font-family: Lato, Helvetica, Arial, sans-serif;
}

#nav-mobile {
  padding: 30px 150px;
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
