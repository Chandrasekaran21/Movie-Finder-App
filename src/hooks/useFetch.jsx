import { useEffect, useState } from "react";
import { options } from "../utils/Options";


    const useFetch = (api, queryTerms="") => {

        const [data, setData] = useState([]);

       

        useEffect(() =>{

            async function fetchMovies(){

            const response = await fetch(`https://api.themoviedb.org/3/${api}?query=${queryTerms}`, options);

            const data = await response.json();
            
            setData(data.results)
            
            }
            fetchMovies();
        },[api, queryTerms])

        return {
            data
        }
  
    }

export default useFetch