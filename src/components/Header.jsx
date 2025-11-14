import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/logo.svg"

const Header = () => {

  const navigate = useNavigate();

  const handleClick = (e) =>{

    e.preventDefault();

    const queryParam =  e.target.search.value;
    e.target.reset();

    return navigate(`/search?q=${queryParam}`);

  }

  const handleNavBar = () =>{

    const menu = document.getElementById("mobile-menu-2");
    menu.classList.toggle("hidden");
  }


  const activeClass = "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent text-primary-700 lg:text-primary-700 lg:p-0 dark:text-white"

  const inActiveClass = "block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"

  return (
    <header>
      <nav className="bg-black text-white px-4 lg:px-6 py-2.5 dark:bg-black" >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <NavLink to="/" className="flex items-center">
                  <img src={Logo} className="h-5 mr-3 sm:h-5" alt="Flowbite Logo" />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cinebite</span>
              </NavLink>
              <div className="flex items-center lg:order-3">
              <form onSubmit={handleClick} action="#" method="GET" className="hidden lg:block lg:pl-2">
                <label htmlFor="topbar-search" className="sr-only">Search</label>
                <div className="relative mt-1 lg:w-96">

                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /> </svg>

                  </div>

                  
                    <input type="text" name="search" id="topbar-search" className="bg-gray-700 border border-gray-300 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />

                </div>
              </form>
              </div>
              <div className="flex items-center lg:order-2">

                <button onClick={handleNavBar} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                        <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass} end >Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/movie/popular" className={({isActive}) => isActive ? activeClass : inActiveClass}>Popular</NavLink>
                      </li>
                      <li>
                          <NavLink to="/movie/top" className={({isActive}) => isActive ? activeClass : inActiveClass}>Top</NavLink>
                      </li>
                      <li>
                          <NavLink to="/movie/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
</header>
  )

  
}

export default Header