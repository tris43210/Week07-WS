
import { sports } from "./sportStorage"
import { Link } from "react-router";



export function SportPage() {

    return(
        <div>
            {sports.map(function(sport) {
                return(<Link to={`/sports/${sport.id}`}>{sport.name}</Link>)}
            )}
        </div>
    )

}


