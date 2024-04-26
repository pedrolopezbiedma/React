import useNavigationContext from "../../hooks/useNavigationContext";

const Route = ({ children, path }) => {
    const { currentPath } = useNavigationContext();

    return (
        <div>
            { currentPath === path && (
                children
            )}
        </div>
    )
}

export default Route