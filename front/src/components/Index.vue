<template>
<body>
  <div class="Index grid-index" :style="myStyle" id="wrapper">
    <div class="welcome">
      <div class="welcome-txt center-align white-text">Welcome To Moxi Web!</div>
    </div>
    <div class="intro">
        <h2 class="center-align white-text">KEEP TRACK OF EVERYTHING</h2>
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

.Index {
  margin-bottom: 500px;
}

template {
  background-color: #f0f2ef;
}


/* mobile style */
#wrapper {
  padding: 0 20px 20px 20px;
}

.grid-index {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.welcome {
  grid-column: 1/6 !important;
  padding: 0 20px 20px 20px;
}

.intro {
  grid-column: 8/9 !important;
  padding: 0 20px 20px 20px;
  /* width: 200%; */
}

/* @media (min-device-width: 768px) and (max-device-width: 1024px) {  
  .welcome {
    padding-left: 90px !important; 
  }
  
} */
</style>
