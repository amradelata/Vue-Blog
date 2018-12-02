<template>
  <div id="contactUs-blog">
    <h1>hello from the outside</h1>
    <input class="input1" type="text" name="name" placeholder="Name">
    
    <input class="input1" type="text" name="email" placeholder="Email">
    
    <input class="input1" type="text" name="subject" placeholder="Subject">
    
    <textarea class="input1" name="message" placeholder="Message"></textarea>
    <br>
    <button class="btn-success">Send Email</button>
  </div>
</template>

<script>
</script>
<style scoped>
#contactUs-blog {
  text-align: center;
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
.btn-success {
  border: none;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
</style>
