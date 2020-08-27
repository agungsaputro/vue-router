<template>
    <div class="container">
        <div class="album">
            <h2> Data Album dengan judul: {{album.title}} </h2>
            <ul>
                <li> user :{{album.userId}}</li>
                <li> judul :{{album.title}}</li>
            </ul>
                 <router-link to="/album"> Back </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            album:[]
        }
    },

    created(){
        this.getAlbum()
    },

    methods:{
        getAlbum(){
            axios.get(`https://jsonplaceholder.typicode.com/albums/${this.$route.params.id}`)
            .then((response) =>{
                this.album = response.data
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