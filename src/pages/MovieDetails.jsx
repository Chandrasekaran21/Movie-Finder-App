import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { options } from "../utils/Options";
import BackUp from "../assets/backup.jpg";

const MovieDetails = () => {

  useEffect(() =>{

    document.title = `${original_title}/Cinebite`
  })

  const navigate = useNavigate();

  const params = useParams();

  const [movie, setMovie] = useState({});

  const image = movie.poster_path
    ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : BackUp;

  const {id, original_title, overview, genres, popularity, release_date, runtime, status, vote_average, vote_count } = movie;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );

      const data = await response.json();

      setMovie(data);
    };

    fetchMovie();
  }, [params]);

  if (!movie) return <p>Loading</p>;

  return (
    <main className="text-center sm:text-start">
      <section className="max-w-7xl max-auto py-7">
        <div className="sm:flex justify-center max-w-full min-h-80 mx-auto border bg-gray-800 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg mx-auto w-sm sm:min-h-screen h-80 p-3"
            src={image}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {original_title}
            </h5>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              {overview}
            </p>
            <p className="py-5 justify-center sm:justify-start flex flex-wrap gap-2">
              {genres
                ? genres.map((genres, index) => (
                    <span key={index} className="border border-gray-700 rounded py-2 text-gray-200 dark:text-gray-200 bg-red-600 px-3">
                      {genres.name}
                    </span>
                  ))
                : ""}
            </p>

            <div className="flex items-center justify-center sm:justify-start mb-3 ">
              <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="yellow" viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-400 dark:text-gray-400">
                {vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
                <a href="#" className="text-sm font-medium text-gray-400 dark:text-gray-400 underline hover:no-underline">
                {vote_count}
                </a>
            </div>

            <ul className="mb-3 font-normal text-gray-400 dark:text-gray-400">
              <li>
                <strong>Popularity: </strong>
                {popularity}
              </li>
              <li>
                <strong>Release Date: </strong>
                {release_date}
              </li>
              <li>
                <strong>Runtime: </strong>
                {runtime}
              </li>
              <li>
                <strong>Status: </strong>
                {status}
              </li>
            </ul>
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Go back to Home
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
