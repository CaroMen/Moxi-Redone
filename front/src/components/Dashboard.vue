<template>
  <div class="background">
    <!-- <v-parallax src="../assets/pattern.jpeg" height="900" class="parallax"> -->
    <div class="header">
      <!-- <div class="welcome center">
        <h2>I dont know what will go here</h2>
      </div>-->
      <div class="welcome-dash">
        <h3>Welcome</h3>
      </div>
    </div>
    <!-- </v-parallax> -->
    <v-card class="tabs-line">
      <v-tabs background-color="#603CE7" color="#F0C345" right>
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
    <div class="section-1-bg">
      <div class="dashboard section-1 container">
        <div class="card" v-for="activity in activities" :key="activity.id">
          <a href class="btn-floating btn-large halfway-fab">
            <router-link :to="{ name: 'AddActivity' }">
              <i class="material-icons edit">edit</i>
            </router-link>
          </a>
          <div class="card-content">
            <i class="material-icons delete" @click="deleteActivity(activity.id)">delete</i>
            <i class="material-icons done" @click="deleteActivity(activity.id)">check_circle</i>
            <h2 class="text">{{ activity.title }}</h2>
            <ul class="details">
              <li v-for="(details, index) in activity.details" :key="index">
                <span class="chip">{{ details }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="card add-act teal-text">
          <h2 class="title">Add New Activity</h2>
          <a href class="btn-floating btn-large halfway-fab">
            <router-link :to="{ name: 'AddActivity' }">
              <i class="material-icons add">add</i>
            </router-link>
          </a>
          <router-link :to="{ name: 'AddActivity' }">
            <a class="waves-effect waves-light btn-large redirects">Button</a>
          </router-link>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Dashboard",
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    deleteActivity(id) {
      // delete doc from firestore
      db.collection("activities")
        .doc(id)
        .delete()
        .then(() => {
          this.activities = this.activities.filter((activity) => {
            return activity.id != id;
          });
        });
    },
  },
  created() {
    // fetch data from firestore
    db.collection("activities")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let activity = doc.data();
          activity.id = doc.id;
          this.activities.push(activity);
        });
      });
  },
};
</script>

<style>
body {
  background-color: #1e1935 !important;
  height: 100%;
  margin: 0;
}

.background {
  background-color: #1e1935;
  margin-top: -10px;
  color: white;
  height: 100%;
  width: 100%;
  margin: 0;
}

.welcome {
  margin-left: 10%;
}

.header {
  width: 100%;
}

.card {
  background-color: #b63674 !important;
  border-radius: 10px;
}

.section-1 {
  background-color: #1e1935 !important;
  max-width: 100%;
  margin-top: 40px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 200px;
}

.section-1-bg {
  background: #1e1935;
  width: 80%;
  margin: 0 auto;
}

.section-1 .btn-floating {
  /* background-color: #cf605c; */
  background-color: #603ce7;
}

.redirects {
  margin-left: 50px;
  margin-top: 50px;
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
  margin-bottom: 60px;
  max-width: 80%;
  background: #1e1935;
}

.dashboard h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

.dashboard .details {
  margin: 30px auto;
}

.dashboard .details li {
  display: inline-block;
}

.dashboard .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  /* color: #f0f2ef; */
  color: #898fae;
  font-size: 1.4em;
}

.dashboard .done {
  position: absolute;
  top: 30px;
  right: 4px;
  cursor: pointer;
  /* color: #f0f2ef; */
  color: #898fae;
  font-size: 1.4em;
}

.add-act {
  position: relative;
}

/* .background {
  /* background: #e6e8e6; */

.add-act h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

a {
  color: inherit !important;
} /* Unvisited link  */
a:visited {
  color: inherit !important;
} /* Visited link    */
a:hover {
  color: inherit !important;
} /* Mouse over link */
a:active {
  color: inherit !important;
}

@media (min-device-width: 768px) and (max-device-width: 1024px) {

  .welcome-dash, .tabs-line, body {
    width: 100%;
  }
  
  .card {
    width: 100%;
  }
}
</style>
