<template>
  <div class="header-blog">
    <nav class="container">
      <ul>
        <li>
          <router-link to="/" exact>Blog</router-link>
        </li>
        <li>
          <router-link to="/add" exact>Add a new blog</router-link>
        </li>
        <li>
          <router-link to="/contactUs" exact>Contact Us</router-link>
        </li>
      </ul>
    </nav>
    <h1 class="hero_title">The best free stock blogs shared by
      <br>talented writers.
    </h1>
  </div>
</template>

<script>
</script>

<style scoped>
.header-blog {
  background-image: url(https://images.pexels.com/photos/822608/pexels-photo-822608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center, center;
  height: 80vh;
  position: relative;
}
.hero_title {
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.8px;
  margin-top: 0;
  margin-bottom: 21px;
  font-weight: 400;
  text-shadow: true;
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
ul {
  list-style-type: none;
  text-align: right;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
}
nav {
  padding: 14px 0;
}
.router-link-active {
  border-bottom: 2px solid #fff;
}
</style>