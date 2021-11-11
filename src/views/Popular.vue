<template lang="">
    <h1> Popular Movies </h1>
    <div class="popular row row-cols-1 row-cols-lg-4 g-3">
        <div v-for="(movie,id) in movies" :key="id">
            <movie-card :movie="movie"/>
        </div>
        <div class="center" style="margin-left: 490px">
            <button type="button" class="btn btn-dark mb-4 " @click="getNextPage()">See more</button>
        </div>
    </div>
</template>
<script>
import apiService from '../services/api.service.js';
import MovieCard from '../components/MovieCard.vue';
export default {
    name: 'Popular',
    components: {
        MovieCard
    },
    data() {
        return {
            movies: [],
            currPage: 1,
        }
    },
    beforeMount() {
        this.getPopular();
    },
    methods: {
        async getPopular() {
            const response = await apiService.getPopular(this.currPage);
            this.movies = response.data.results;
        },
        async getNextPage() {
            const response = await apiService.getPopular(this.currPage + 1);
            this.movies = this.movies.concat(response.data.results);
            this.currPage++;
        }
    },
}
</script>
<style >
h1{
    margin-top: 8px;
}
    
</style>