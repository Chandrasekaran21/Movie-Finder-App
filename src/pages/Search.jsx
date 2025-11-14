import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react";


const Search = ({api}) => {

  const [searchParams] = useSearchParams();

  const queryTerms = searchParams.get('q');

  const { data:movies } = useFetch(api, queryTerms);

  useEffect(() =>{

    document.title = `${queryTerms}/Cinebite`
  })

  return (
    <main>

      <section>
        <p className="text-3xl text-gray-800 ">
          {movies.length === 0 ? `No result found in ( ${queryTerms} )` : `Result for ( ${queryTerms} )` } 
        </p>
      </section>

      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" >

          

            {/* {
              dummyMovies.map((_, index)=>(

                <Card key={index} />
              ))
            } */}

            {
              movies.map((movie) =>(

                <Card key={movie.id} movie={movie} />
                
              ))
            }

            

        </div>
      </section>
    </main>
  )
}

export default Search