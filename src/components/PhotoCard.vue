<template>
    <div>
        <br/>
        <div class="container">
            <div class="PhotoCard">
                <div class="row">
                    <div class="col-lg-3">
                        <img class="card-img-top" :src="photo.thumbnailUrl" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{photo.title}}</h5>
                            </div>
                  </div>
            </div>
            <router-link to="/photo"> Back </router-link>
        </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            photo:[]
        }
    },

    created(){
        this.getPhoto()
    },

    methods:{
        getPhoto(){
            axios.get(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.id}`)
            .then((response) =>{
                this.photo = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}
</script>