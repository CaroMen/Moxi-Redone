<template>
  <div class="navbar">
    <nav class="nav-extended amber lighten-3">
      <div class="nav-content">
        <router-link to>
          <span class="nav-title teal-text">MOXI</span>
        </router-link>
        <router-link to>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a class="waves-effect waves-dark btn">Home</a>
            </li>
            <li>
              <a class="waves-effect waves-dark btn">Sign In</a>
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
  data() {}
};
</script>

<style>
.navbar nav {
  padding: 0 60px;
}

#nav-mobile {
  padding: 30px 150px;
}
</style>