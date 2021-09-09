import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk4MDM5NDMxMTc1OTMxYTM3Y2YxYzY1N2I3MzkzZiIsInN1YiI6IjYxMzFiZGZjNWFiODFhMDA2OGJlODNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rYiAMLZaaYmfCD-omDdhfN7wPgV55aMccol7NT0qtWg'
    }
});
const discoverGenre = async ()=> await instance.get('/genre/movie/list');
export {discoverGenre};