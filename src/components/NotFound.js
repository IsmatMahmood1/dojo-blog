import { Link } from "react-router-dom";

export function NotFound () {
    return (
        <div className='not-found'>
            <h2>That page cannot be found.</h2>
            <Link to='/'>Back to the homepage...</Link>
        </div>
    )
}