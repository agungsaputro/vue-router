import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../components/Post.vue'
import Photo from '../components/Photo.vue'
import Album from '../components/Album.vue'
import Albums from '../components/Albums.vue'
import Posts from '../components/Posts.vue'
import Photos from '../components/PhotoCard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/post',
    name: 'Post',
    component: Post,
  },
  {
    path: '/post/:id',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/photo/:id',
    name: 'PhotoCard',
    component: Photos,
  },
  {
    path: '/album',
    name: 'Album',
    component: Album,
  },
  {
    path: '/album/:id',
    name: 'Albums',
    component: Albums,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
