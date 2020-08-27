 <template>
    <div id="container">
        <h2>Daftar Album : </h2>
        <div class="list">
            <ul v-for="album in albums" :key="album.id" style="list-style: none">
                <li>
                    <router-link :to="{ name: 'Albums', params: { id: album.id } }">
                        {{ album.title }}
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
            albums: []
        }
    },
    created(){
        this.getAllAlbum()
    },
    methods:{
        getAllAlbum(){
            axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response) =>{
                this.albums = response.data
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