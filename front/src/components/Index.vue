<template>
<body>
  <div class="Index grid-index" :style="myStyle" id="wrapper">
    <!-- <div class="welcome"> -->
      <h2 class="welcome-txt center-align white-text welcome">Welcome To Moxi Web!</h2>
    <!-- </div> -->
    <!-- <div class="intro"> -->
        <h2 class="center-align white-text intro">KEEP TRACK OF EVERYTHING</h2>
    <!-- </div> -->
  </div>
</body>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      myStyle: {
        backgroundColor: "#1E1935",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #1e1935;
}

/* .Index {
  margin-bottom: 500px;
} */

template {
  background-color: #1e1935;
}


/* mobile style */
.grid-index {
  display: grid;
  grid-template-columns: repeat(8, 1fr);}

.welcome {
  grid-column: 1/6 !important;
  padding: 0 150px 20px 10px;
  margin-left: 100px;
  width: 100%;
}

.intro{
  grid-column: 8/9 !important;
  padding: 0 20px 20px 500px;
  margin-right: 220px;
  width: 100%;
}

@media (min-device-width: 768px) and (max-device-width: 1024px) {

  .grid-index {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .welcome {
    /* padding: 0 -50px 0px 0px; */
    width: 150%;
    padding: 0 410px;
    /* margin: 0 -130px 0 80px; */
    /* margin-left: 500px; */
    display: flex;  
    justify-content: center;
  }

  .welcome h2 {
    word-wrap: none;
  }

  .intro {
    grid-row: 2/3 !important;
    width: 150%;
    margin-left: -400px;
    /* margin-left: -100px; */
    padding: -10px -10px;
    width: 150%;
    overflow: hidden;
    word-wrap: break-word;
  }

  
}

@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .grid-index {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .welcome {
    /* padding: 0 -50px 0px 0px; */
    width: 1000px;
    padding: 0 900px;
    /* margin: 0 -130px 0 80px; */
    margin-left: 500px;
    /* margin-right: -100px; */
    /* word-wrap: none; */
    display: flex;  
    justify-content: center;
  }

  .intro {
    grid-row: 2/3 !important;
    width: 1000px;
    margin-left: -400px;
    /* margin-left: -100px; */
    padding: -200px -10px;
    width: 150%;
    overflow: hidden;
    word-wrap: break-word;
  }
}
</style>
