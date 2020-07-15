<template>
  <div class="signin container">
    <div class="moxi-image">
      <img class="moxi" src="@/assets/animal.png" />
    </div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" />
            <label class="active" for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label class="active" for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" />
            <label class="active" for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label class="active" for="email">Email</label>
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
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {}
};
</script>

<style>
body {
  background: #f5f4f6;
}

.signin {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  background-color: #ffd15c;
  border-radius: 25px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.25);
  background: linear-gradient(to bottom, #ffe299, #ffd15c);
}

.moxi {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 90px;
  left: 300px;
  z-index: -1;
}

/* iPad */
@media (min-device-width: 768px) and (max-device-width: 1024px) {
  .moxi {
    position: absolute;
    max-width: 300px;
    width: 100%;
    height: auto;
    top: 90px;
    left: 50px;
    z-index: -1;
  }
}

/* iPad Pro */
@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .moxi {
    position: absolute;
    max-width: 300px;
    width: 100%;
    height: auto;
    top: 90px;
    left: 90px;
    z-index: -1;
  }
}

/* iPhones */
@media (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  .moxi {
    position: absolute;
    max-width: 300px;
    width: 100%;
    height: auto;
    top: 90px;
    left: 300px;
    z-index: -1;
  }
}
</style>
