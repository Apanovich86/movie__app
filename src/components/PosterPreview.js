import {
    BrowserRouter as Router,
    Switch,
    Route,
  Link,
    withRouter
} from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const movieUrl = "https://www.themoviedb.org/movie/";

export default function PosterPreview({item}) {
    return (
        <div className={"movie"}>
            <Link to={`/movies/${item.id}`}>
                <img src={IMG_API+item.poster_path} alt={item.item}/>
            </Link>
            <div className={"movie-info"}>
                <h3>{item.title}</h3>
                <div>{item.vote_average}</div>
            </div>
        </div>
    );
}
