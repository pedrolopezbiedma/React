import className from 'classnames'
import useNavigationContext from '../../hooks/useNavigationContext';

const Link = ({ children, pathTo, classNames, active }) => {
    const { currentPath, navigateTo } = useNavigationContext();
    const activeClassName = pathTo === currentPath ? 'font-bold border-l-4 border-blue-500 pl-2' : null
    const finalClassName = className(classNames, 'text-blue-500 mb-3', activeClassName );

    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(pathTo)
    }

    return(
        <a className={finalClassName} onClick={handleClick}>{ children }</a>
    )
}

export default Link;