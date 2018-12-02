<template>
  <div id="show-blogs">
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <img v-bind:src="blog.image">

      <div class="content">
        <h3>{{ blog.title}}</h3>
        <article>{{ blog.content.slice(0, 50)+ " ..." }}</article>
        <router-link v-bind:to="'/blog/' + blog.id ">
          <button class="btn btn-primary">Read Now</button>
        </router-link>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {
    showAlert() {
      alert("hello from the outside");
    }
  },
  created() {
    this.$http.get("http://localhost:3000/blogs").then(function(data) {
      this.blogs = data.body;
    });
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 1600px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}
.single-blog {
  flex-basis: calc(25% - 10px);
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 5px;
  border-radius: 3px;
  overflow: hidden;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
.content {
  padding: 10px;
}
img {
  width: 100%;
  height: 300px;
}
.btn-primary {
  width: 100%;
}
</style>




