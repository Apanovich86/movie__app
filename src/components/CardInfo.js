import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../services/getMovies";
import {loadMovies} from "../redux/actions";

const CardInfo = () => {
    const { id } = useParams();
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies} = state;
    useEffect(() => {
        getMovies().then(value => {
            console.log(value.data.results);
            dispatch(loadMovies(value.data.results))
        });
    }, [])
    const movie= movies.find(movie=>movie.id === id);
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    );
};

export default CardInfo;
