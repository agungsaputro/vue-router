<template>
    <div class="container">
        <div class="Posts">
            <h2> Data post dengan judul: {{post.title}} </h2>
            <ul>
                <li> judul :{{post.title}}</li>
                <li> body :{{post.body}}</li>
            </ul>
                 <router-link to="/post"> Back </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            post:[]
        }
    },

    created(){
        this.getPost()
    },

    methods:{
        getPost(){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
            .then((response) =>{
                this.post = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
ul li {
    list-style: none;
}
</style>