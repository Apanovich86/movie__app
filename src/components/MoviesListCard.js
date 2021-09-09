import {NavLink} from "react-bootstrap";
import {useEffect, useState} from "react";
import {getMovie, getMovies} from "../services/getMovies";
import {loadMovie, loadMovies} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import PosterPreview from "./PosterPreview";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w342";
const IMG_BACK = "https://image.tmdb.org/t/p/w1280";
export default function MoviesListCard({history, match: {params: {id}}}) {
    console.log(id);
    let [movie, setMovie] = useState({});
    useEffect(() => {
        getMovie(id).then(value =>
            setMovie({...value.data}))
    }, [id]);

    console.log(movie);
    return (
        // <div className={"padding"}>
        <div className={"d-flex"} style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${IMG_BACK}/${movie.backdrop_path})`,
            backgroundSize: "cover",
            padding: "30px",
            filter: "brightness(100%)"
        }}>
            <img src={IMG_API + (movie.poster_path)} alt={'poster'}/>
            <div className={"all-info"}>
                <h2>{movie.title} </h2>
                <span className={"f-w"}>({movie.release_date})</span>
                {/*<div>{movie.genres.name}</div>*/}
                <div className={"italic"}>{movie.tagline}</div>
                <h5>Overview</h5>
                <div>{movie.overview}</div>
                <div><span className={"italic"}>vote average:</span> {movie.vote_average}</div>
                <div><span className={"italic"}>original language:</span> {movie.original_language}</div>
                <div><span className={"italic"}>popularity:</span> {movie.popularity}</div>
                <div><span className={"italic"}>vote count:</span> {movie.vote_count}</div>
                <div><span className={"italic"}>movie budget:</span> {movie.budget}</div>
                <br/>
                <Link to="/movies">
                    <button style={{background: "lightgray", borderRadius: "5px", fontWeight: "bold"}}>All films >>
                    </button>
                </Link>
            </div>
        </div>

    );
}