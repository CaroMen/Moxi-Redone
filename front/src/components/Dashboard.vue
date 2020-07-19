<template>
  <div class="dashboard container">
    <div class="card add-act container center">
      <h2>Add New Activity</h2>
      <a href class="btn-floating btn-large halfway-fab teal">
        <router-link :to="{ name: 'AddActivity' }">
          <i class="material-icons add">add</i>
        </router-link>
      </a>
    </div>
    <div
      class="card amber accent-1"
      v-for="activity in activities"
      :key="activity.id"
    >
      <div class="card-content">
        <i class="material-icons delete" @click="deleteActivity(activity.id)"
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
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
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
</style>
