import { useContext } from "react"
import NavigationContext from "../context/NavigationContext"

const useNavigationContext = () => {
    return useContext(NavigationContext);
}

export default useNavigationContext