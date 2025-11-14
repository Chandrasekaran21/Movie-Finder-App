import {Routes, Route} from "react-router-dom"
import {MovieDetails, MovieList, Search, PageNotFound} from "../pages"

export const AllRoutes = () =>{

    return (
        <Routes>
            <Route path="/" element={<MovieList api="movie/now_playing" title="Home" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movie/popular" element={<MovieList api="movie/popular" title="Popular" />} />
            <Route path="movie/top" element={<MovieList api="movie/top_rated" title="top_rated" />} />
            <Route path="movie/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search api="search/movie" />} />
            <Route path="*" element={<PageNotFound title="pagenotfound" />} />
        </Routes>
    )
}