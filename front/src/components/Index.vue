<template>
  <div class="Index" :style="myStyle" id="wrapper">
    <div class="row">
      <div class="col s12">Welcome To Moxi Web!</div>
      <div class="col s6">
        <img src />
      </div>
      <div class="col s6">
        <h2 class="center-align indigo-text">KEEP TRACK OF EVERYTHING</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      myStyle: {
        backgroundColor: "#f0f2ef",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
template {
  background-color: #f0f2ef;
}
</style>
