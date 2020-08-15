<template>
<body>
  <div class="section1">
    <div class="header">
      <div class="welcome center">
        <h2>I dont know what will go here</h2>
      </div>
    </div>
    <v-card>
      <v-tabs background-color="#CF605C" color="blue-grey lighten-5" right>
        <v-tab>
          <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{ name: 'AddActivity' }">Add Activity</router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{ name: 'Calendar' }">Calendar</router-link>
        </v-tab>
        <v-tab>Abstract</v-tab>
      </v-tabs>
    </v-card>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style>
.section1 {
  background-color: #494832;
  margin-top: -10px;
  margin-bottom: 500px;
}
</style>