<template class="bg-container">
  <body>
    <div class="container first">
      <v-container class="signup signup-container">
        <div class="title white-text center-align">
          <h2>Welcome!</h2>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
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
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                ></span>
              </div>
            </div>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </v-container>
    </div>
  </body>
</template>

<script>
export default {
  name: "SignUp",
  data() {},
};
</script>

<style>
body {
  background-color: #1e1935;
  /* margin-top: -10px;
  margin-bottom: 20px;
  padding-bottom: 20px; */
  margin: 0;
  height: 100%;
}

.container {
  max-width: 500px;
  background-color: #1e1935;
}

.row {
  color: white;
}

.signup {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  background-color: #603ce7;
  border-radius: 25px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.25);
  /* background: linear-gradient(to bottom, #494832, #8e7c7a); */
}

.signup h2 {
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
