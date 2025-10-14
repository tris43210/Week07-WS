import { useParams } from "react-router"

export function EachSportPage() {
    const params = useParams(); 
    console.log(params)
    return(
        <div>
            <p>This is The Page for Each sport</p>
        </div>
    )
}