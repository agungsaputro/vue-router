  
<template>
    <div id="container">
        <h2>Daftar Post : </h2>
        <div class="list">
            <ul v-for="post in posts" :key="post.id" style="list-style: none">
                <li>
                    <router-link :to="{ name: 'Posts', params: { id: post.id } }">
                        {{ post.title }}
                    </router-link>
                </li>
            </ul>
            <div class="card-footer pb-0 pt-3">
                <jw-pagination :items="exampleItems" @changePage="getAllPosts"></jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
    data(){
        return{
            posts: [],
            exampleItems
        }
    },
    created(){
        this.getAllPosts()
    },
    methods:{
        getAllPosts(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>{
                this.posts = response.data
                console.log(response)
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    },
    watch:{
        posts () {
            this.setPages();
        }
    },
    computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    }
  },
}
</script>
<style scoped>
.list {
    margin-left: -50px;
}
</style>