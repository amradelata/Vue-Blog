<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
  
      <img v-bind:src="blog.image">

    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
    <router-link v-bind:to="'/'">
      <button class="btn btn-primary">Go back</button>
    </router-link>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/blogs/" + this.id)
      .then(function(data) {
        this.blog = data.body;
      });
  }
};
</script>

<style>
#single-blog {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px dotted #aaa;
}
article {
  margin-bottom: 50px;
}
</style>