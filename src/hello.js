import { Link } from "react-router";
import PostList from "./PostList";


export default function Hello(){
    return (
        <>
        <h1>
            Hello ahmed anany from hello component
            <Link style={{textDecoration:"None", margin:"10px"}} to="/">
            <button >Go to bank loan form</button>
            </Link>
        </h1>
        <PostList/>
        </>
    )
}