<template>
  <div class="background">
    <v-parallax src="../assets/pattern.jpeg" height="900" class="parallax">
      <div class="header">
        <div class="welcome center">
          <h2>I dont know what will go here</h2>
        </div>
      </div>
    </v-parallax>
    <div class="section-1">
      <div class="dashboard section-1 container">
        <div
          class="card amber accent-1"
          v-for="activity in activities"
          :key="activity.id"
        >
          <a href class="btn-floating btn-large halfway-fab teal">
            <router-link :to="{ name: 'AddActivity' }">
              <i class="material-icons edit">edit</i>
            </router-link>
          </a>
          <div class="card-content">
            <i
              class="material-icons delete"
              @click="deleteActivity(activity.id)"
              >delete</i
            >
            <h2 class="teal-text">{{ activity.title }}</h2>
            <ul class="details">
              <li v-for="(details, index) in activity.details" :key="index">
                <span class="chip">{{ details }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="card add-act container amber accent-1 teal-text">
          <h2 class="title">Add New Activity</h2>
          <a href class="btn-floating btn-large halfway-fab teal">
            <router-link :to="{ name: 'AddActivity' }">
              <i class="material-icons add">add</i>
            </router-link>
          </a>
        </div>
      </div>
    </div>
    <div class="calendar">
      <v-parallax src="../assets/water.jpeg" height="700" class="parallax">
        <div class="row">
          <div class="grid-example col s12 m6">
            <span class="flow-text">Add A Task To Your Calendar</span>
          </div>
        </div>
      </v-parallax>
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
.parallax {
  /* height: 100%; */
  width: 100%;
  /* margin: 0px auto; */
  margin-bottom: -220px;
  /* margin-right: -30px; */
  object-fit: cover;
}

.header {
  max-width: 100%;
  /* margin: 30px auto; */
}

.section-1 {
  background: #d1ffc6;
  max-width: 100%;
  margin-top: 40px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
  margin-bottom: 60px;
  max-width: 80%;
  /* background: #80cbc4; */
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
  color: #aaa;
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
</style>
