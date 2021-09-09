import {LOAD_GENRES, LOAD_MOVIES} from "../actions";
import {SET_CURRENT_PAGE} from "../actions/actions";

let initialState = {movies: [], currentPage: 1, perPage: 8, totalCount: 0};
export const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case LOAD_MOVIES:
            console.log(action)
            return {...state, movies: [...action.payload]}
        case LOAD_GENRES:
            return {...state, genres: [...action.payload]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: {...action.payload}}
        default:
            return state;
    }
}
