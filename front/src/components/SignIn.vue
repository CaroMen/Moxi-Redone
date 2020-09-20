<template>
<body>
  <v-container class="signin">
    <div class="title white-text center-align">
      <h2>Welcome Back!</h2>
    </div>
    <div class="cont">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label class="active" for="password">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label class="active" for="email">Password</label>
              <span class="helper-text" data-error="wrong" data-success="right"></span>
            </div>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </v-container>
</body>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {};
  },
};
</script>

<style>

.cont {
  max-width: 500px;
  background-color: #603ce7 !important;
}

.signin {
  margin-top: 100px;
  margin-bottom: 130px;
  /* padding: 20px; */
  max-width: 500px;
  background-color: #603ce7 !important;
  border-radius: 25px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.25);
  /* background: linear-gradient(to bottom, #d6a964, #cf605c); */
}

.signin h2 {
  font-family: Lato, Helvetica, Arial, sans-serif;
}


/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {

}

/* iPad Pro */
@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  
}

/* iPhones */
@media (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
 
}
</style>
