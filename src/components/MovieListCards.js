import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getMovies} from "../services/getMovies";
import {loadMovies, setCurrentPage} from "../redux/actions";
import PosterPreview from "./PosterPreview";

export default function MovieListCards(props){
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies} = state;
    const currentPage = useSelector(state => state.movies.currentPage);
    const totalCount = useSelector(state => state.movies.totalCount);
    const perPage = useSelector(state => state.movies.perPage);
    const pages =[1,2,3,4,5]
    useEffect((currentPage, perPage) => {
        getMovies().then(value => {
            dispatch(setCurrentPage(1))
            dispatch(loadMovies(value.data.results, currentPage, perPage))
        });
    }, [currentPage])
    return(
            <div className={"movie-container"}>
                {movies.map(value =>
                    <PosterPreview
                        key={value.id} item={value} />
                ) }
            <div className={'pages'}>
                {pages.map((page, index) =><span key={index} className={currentPage == page ? "current-page":"page"}
                onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}
