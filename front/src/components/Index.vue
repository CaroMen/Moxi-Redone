<template>
<body>
  <div class="Index" :style="myStyle" id="wrapper">
    <div class="row">
      <div class="col s12 welcome-txt white-text">Welcome To Moxi Web!</div>
      <div class="col s6">
        <img src />
      </div>
      <div class="col s6">
        <h2 class="center-align white-text">KEEP TRACK OF EVERYTHING</h2>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      myStyle: {
        backgroundColor: "#494832",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background: #494832;
}

.Index {
  margin-bottom: 500px;
}

template {
  background-color: #f0f2ef;
}
</style>
