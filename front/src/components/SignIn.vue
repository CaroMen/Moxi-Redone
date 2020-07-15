<template>
  <form @submit.prevent="SignIn">
    <div class="field title">
      <label for="title">Create A Profile:</label>
      <input type="text" name="title" v-model="title" />
    </div>
    <div class="field">
      <label for="ingredient">Email:</label>
      <input type="text" name="ingredient" v-model="ingredients[index]" />
      <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
    </div>
    <div class="field add-ingredient">
      <label for="add-ingredient">Add an ingredient:</label>
      <input
        type="text"
        name="add-ingredient"
        @keydown.tab.prevent="addIng"
        v-model="another"
      />
    </div>
    <div class="field center-align">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
      <button class="btn pink">Add Smoothie</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      title: null,
      another: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    SignIn() {
      if (this.title) {
        this.feedback = null;
        // create a slug
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("smoothies")
          .add({
            title: this.title,
            email: this.email,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter an email";
      }
    },
    password() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    deleteIng() {
      this.ingredients = this.ingredients.filter(ingredients => {
        return ingredient != ing;
      });
    }
  }
};
</script>

<style></style>
