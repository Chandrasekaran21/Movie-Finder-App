import { Link } from "react-router-dom"
import  NotFound from "../assets/404notfound.png"
import useTitle from "../hooks/useTitle"
const PageNotFound = ({title}) => {

  useTitle(title)

  return (
    <main className="flex items-center justify-center p-4 min-h-screen bg-gray-200 ">
      <section className="text-center" >
        <img src={NotFound} className="h-96 mb-5" alt="404 Not Found" />
         <Link to={"/"} >
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go back to Home</button>
         </Link>
      </section>
    </main>
  )
}

export default PageNotFound