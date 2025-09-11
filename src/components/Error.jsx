import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return(
        <div>
            <h1 className="text-2xl font-bold text-center m-2.5">Oops! Something went wrong.</h1>
            <p className="text-center font-medium m-2.5">Please try again later.</p>
            <p className="text-center font-medium m-2.5">Error: {error.statusText || error.message}</p>
        </div>
    )
}

export default Error;