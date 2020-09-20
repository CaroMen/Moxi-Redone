<template>
<body>
  <div class="Index grid-index" :style="myStyle" id="wrapper">
    <!-- <div class="welcome2"> -->
      <!-- <h2 class="welcome-txt center-align white-text welcome">Welcome To Moxi Web!</h2> -->
    <!-- </div> -->
    <!-- <div class="intro2"> -->
      <!-- <h2 class="center-align white-text intro">KEEP TRACK OF EVERYTHING</h2> -->
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
  /* position: absolute; */
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
  grid-template-columns: repeat(3, 1fr);
}

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
  /* * {
    background-color: #1e1935 !important;
  } */
/* 
  template {
    height: 100%;
    margin-right: 100px;
    background-color: #1e1935 !important;
  } */

  html, body {
    background-color: #1e1935 !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
    /* min-width: 1024px; */
    /* position: fixed;; */
    /* top:700px; */
    /* bottom:0; */
    /* left:0; */
    /* right:0; */
  }


  .grid-index {
    display: grid;
    grid-template-rows: repeat(2, 1fr) !important;
    grid-template-columns: repeat(4, 1fr) !important;
  }

  .welcome {
    margin: 100px !important;
    padding: 0 !important;
    grid-column: 1/5;
    /* display: flex;
    justify-content: right; */
  }

  .intro {
    grid-row: 3/2 !important;
    grid-column: 3/4 !important;
    display: flex;
    justify-content: right;
    margin: 0 auto;
    padding: 0 0;
    /* margin-left: -300px; */
    /* margin-left: -100px; */
    /* padding: -10px -10px; */
    /* width: 120%; */
    /* overflow: hidden; */
    /* word-wrap: break-word; */
  }

  
}

@media (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  /* .grid-index {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .welcome {
    padding: 0 -50px 0px 0px;
    width: 1000px;
    padding: 0 900px;
    margin: 0 -130px 0 80px;
    margin-left: 500px;
    margin-right: -100px;
    word-wrap: none;
    display: flex;  
    justify-content: center;
  }

  .intro {
    grid-row: 2/3 !important;
    width: 1000px;
    margin-left: -400px;
    margin-left: -100px;
    padding: -200px -10px;
    width: 150%;
    overflow: hidden;
    word-wrap: break-word;
  } */
}
</style>
