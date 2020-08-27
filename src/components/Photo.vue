  
<template>
    <div id="container">
        <h2>Daftar Foto : </h2>
        <div class="list">
            <ul v-for="photo in photos" :key="photo.id" style="list-style: none">
                <li>
                    <router-link :to="{ name: 'PhotoCard', params: { id: photo.id } }">
                        {{ photo.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            photos: []
        }
    },
    created(){
        this.getAllPhotos()
    },
    methods:{
        getAllPhotos(){
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) =>{
                this.photos = response.data
                console.log(response)
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
.list {
    margin-left: -50px;
}
</style>