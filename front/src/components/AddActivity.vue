<template>
<body>
  <div>
    <div class="header">
      <div class="welcome center">
        <h2>I dont know what will go here</h2>
      </div>
    </div>
    <!-- </v-parallax> -->
    <v-card>
      <v-tabs background-color="#8E7C7A" color="blue-grey lighten-5" right>
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
    <div class="add-activity container section-1">
      <h2 class="center-align white-text">Add New Activity</h2>
      <form @submit.prevent="AddActivity">
        <div class="field title">
          <label for="title">Activity Title:</label>
          <input type="text" name="title" v-model="title" />
        </div>
        <div v-for="(deets, index) in details" :key="index" class="field">
          <label for="activity">Activity:</label>
          <input type="text" name="activity" v-model="details[index]" />
          <i class="material-icons delete" @click="deleteDeets(deets)">delete</i>
        </div>
        <div class="field add-details">
          <label for="add-details">Add Details:</label>
          <input type="text" name="add-details" @keydown.tab.prevent="addDeets" v-model="another" />
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn">Add Activity</button>
        </div>
      </form>
    </div>
  </div>
</body>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "AddActivity",
  data() {
    return {
      title: null,
      another: null,
      details: [],
      feedback: null,
      slug: null,
    };
  },
  methods: {
    AddActivity() {
      if (this.title) {
        this.feedback = null;
        // create a slug
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        db.collection("activities")
          .add({
            title: this.title,
            details: this.details,
            slug: this.slug,
          })
          .then(() => {
            this.$router.push({ name: "Dashboard" });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter an activity title";
      }
    },
    addDeets() {
      if (this.another) {
        this.details.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add details";
      }
    },
    deleteDeets(deets) {
      this.details = this.details.filter((details) => {
        return details != deets;
      });
    },
  },
};
</script>

<style>
body {
  background: #494832;
  margin-top: -10px;
  padding-bottom: 20px;
}

.section-1 {
  background: #494832;
  max-width: 100%;
  margin-top: 40px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 50px;
}

.add-activity {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
  background: #494832;
}

.add-activity h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-activity .field {
  margin: 20px auto;
  position: relative;
}

.add-activity .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}

.btn {
  background: #cf605c;
}
</style>
