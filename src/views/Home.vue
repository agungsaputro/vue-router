<template>
    <div>
      <br/>
        <div class="container">
            <div class="row">
                <div v-for="image in latest" :key="image" class="col-lg-3">
                    <ImageCard :img="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageCard from '../components/PhotoCard.vue'
export default {
    name: 'HomePage',
    components: {
        ImageCard
    },
    data() {
        return {
            latest: [
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200",
                "http://lorempixel.com/400/200"
            ]
        }
    },
}
</script>

<style>
body {
    background-color: #F4F4F4;
}
</style>
