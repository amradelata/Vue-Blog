<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import showBlogs from "./components/showBlogs.vue";
import header from "./components/header.vue";
import singleBlog from "./components/singleBlog.vue";
import contactUs from "./components/contactUs.vue";

export default {
  components: {
    "show-blogs": showBlogs,
    "app-header": header,
    "single-blog": singleBlog,
    "contactUs-blog": contactUs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial;
  height: 4000px;
}
input {
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>