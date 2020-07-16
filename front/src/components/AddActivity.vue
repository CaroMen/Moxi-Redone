<template>
  <div class="add-activity container">
    <h2 class="center-align teal-text">Add New Activity</h2>
    <form @submit.prevent="AddActivity">
      <div class="field title">
        <label for="title">Activity Title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div v-for="(act, index) in activities" :key="index">
        <label for="activity">Activity:</label>
        <input type="text" name="activity" v-model="activities[index]" />
      </div>
      <div class="field add-details">
        <label for="add-details">Add Details:</label>
        <input
          type="text"
          name="add-details"
          @keydown.tab.prevent="addAct"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn teal">Add Activity</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddActivity",
  data() {
    return {
      title: null,
      another: null,
      activities: [],
      feedback: null
    };
  },
  methods: {
    AddActivity() {
      console.log(this.title, this.activities);
    },
    addAct() {
      if (this.another) {
        this.activities.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add details";
      }
    }
  }
};
</script>

<style>
.add-activity {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-activity h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-activity .field {
  margin: 20px auto;
}
</style>
