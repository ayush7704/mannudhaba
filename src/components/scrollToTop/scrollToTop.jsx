import { useEffect } from "react"
import { useLocation } from "react-router-dom"


function scrollToTop() {
    let pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
    //   return (
    //     <div>scrollToTop</div>
    //   )
}

export default scrollToTop