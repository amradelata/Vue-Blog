import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import contactUs from './components/contactUs.vue';





export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    { path: '/blog/:id', component: singleBlog },
    { path: '/contactUs', component: contactUs }
]