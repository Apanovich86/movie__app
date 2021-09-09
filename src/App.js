import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import MoviesListCard from "./components/MoviesListCard";
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import MovieListCards from "./components/MovieListCards";
import {GlobalStyles} from "./components/globalStyles";
import {lightTheme, darkTheme} from "./components/Themes";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler";

function App() {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
        return (
            <div>
                <Header/>
                <ThemeProvider theme={themeMode}>
                    <>
                        <GlobalStyles/>
                        <Router>
                            <div className={'film'}>
                            </div>
                            <Toggle theme={theme} toggleTheme={themeToggler} />
                            <Link to="/movies">
                                <div className={'button'}>Show all movies</div>
                            </Link>
                            <Route exact path={'/movies'} component={MovieListCards}/>
                            <Route path={'/movies/:id'} render={(props) => {
                                return <MoviesListCard {...props}/>
                            }}/>
                        </Router>
                    </>

                </ThemeProvider>
            </div>
        );
}
export default App;

