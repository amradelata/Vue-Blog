<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Img URL:</label>
      <input type="text" v-model.lazy="blog.image" required>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categories:</p>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <hr>
      <button v-on:click.prevent="post" class="btn-success">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>add img: {{ blog.image }}</p>
      <p>Blog content:</p>
      <p style="white-space: pre">{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
      <router-link v-bind:to="'/add' ">
        <button class="btn btn-primary" v-on:click="refresh">Add More</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
        image: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://localhost:3000/blogs", this.blog)
        .then(function(data) {
          // console.log(data);
          this.submitted = true;
        });
    },
    refresh() {
      this.submitted = false;
      this.blog.image = "";
    }
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
  text-align: center;
}
#add-blog {
  max-width: 1600px;
  margin: 0px auto;
}
h2 {
  margin: 0;
  margin: 50px 0;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"] {
  display: block;
  width: 100%;
  padding: 8px;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
textarea {
  width: 100%;
  padding: 8px;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 500px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  overflow: auto;
}
h3 {
  margin-top: 10px;
}
form {
  background: #f1f2f6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  padding: 20px;
}
.btn-success {
  border: none;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
li {
  list-style: none;
}
</style>