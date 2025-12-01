import { useParams } from "react-router"
import { Link } from "react-router"

export default function NotFound(){
    const parms = useParams()
    console.log(parms)
    return (
        <>
        <h1>404 Not Found</h1>
        <p>The Url!! {parms["*"]}</p>
        <Link to={"/"}>
        <button> Return To Home Page</button>
        </Link>
        

        </>
    )
}