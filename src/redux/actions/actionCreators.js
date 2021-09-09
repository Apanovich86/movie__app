import {LOAD_MOVIES, LOAD_GENRES, SET_CURRENT_PAGE} from "./actions";

const loadMovies = (payload) => {
    return {type:LOAD_MOVIES, payload: payload}
}
const loadGenres = (payload) => {
    return {type:LOAD_GENRES, payload: payload}
}
const setCurrentPage = (payload) => {
    return {type:SET_CURRENT_PAGE, payload: payload}
}
export {loadMovies, loadGenres, setCurrentPage}