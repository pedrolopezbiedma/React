import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler)

        // Clean up
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])

    const navigateTo = (pathTo) => {
        window.history.pushState({}, '', pathTo)
        setCurrentPath(pathTo)
    }

    return (
        <NavigationContext.Provider value={{ currentPath, navigateTo }}>
            { children }
        </NavigationContext.Provider>
    )
}

export { NavigationContextProvider }
export default NavigationContext;