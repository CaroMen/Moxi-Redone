<template>
  <div class="signin container">
    <div class="moxi-image">
      <img class="moxi" src="@/assets/animal.png" />
    </div>
    <div class="plant-image">
      <img class="plant" src="@/assets/leaves_object.svg" />
    </div>
    <div class="plant-image">
      <img class="plant-2" src="@/assets/leaves_object.svg" />
    </div>
    <div class="plant-image">
      <img class="plant-3" src="@/assets/leaves_object.svg" />
    </div>
    <div class="plant-image">
      <img class="plant-4" src="@/assets/leaves_object.svg" />
    </div>
    <div class="title teal-text center-align">
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
  </div>
</template>

<script>
export default {
  name: "SignUp",
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

.signin h2 {
  font-family: Lato, Helvetica, Arial, sans-serif;
}

.moxi {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 110px;
  left: 300px;
  z-index: -1;
}

.plant {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 220px;
  left: 300px;
  z-index: -1;
}

.plant-2 {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 100px;
  left: 300px;
  z-index: -1;
}

.plant-3 {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 220px;
  left: 800px;
  z-index: -1;
}

.plant-4 {
  position: absolute;
  max-width: 300px;
  width: 100%;
  height: auto;
  top: 100px;
  left: 780px;
  z-index: -1;
  transform: scaleX(-1);
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
