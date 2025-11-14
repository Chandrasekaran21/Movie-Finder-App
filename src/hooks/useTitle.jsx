import { useEffect } from "react"

const useTitle = (title) => {


useEffect(() =>{

    document.title = `${title}/Cinebite`
},[title]);    

}

export default useTitle