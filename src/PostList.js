import Post from "./Post";
import { Link } from "react-router"; 
import { PostsContext } from "./contexts/PostsContexts";
import { useContext } from "react";  



export default function PostList(){

    const posts = useContext(PostsContext)
    console.log(posts)

    const postElements = posts.map(post =>{
        return  (<Link style={{textDecoration:"None", margin:"10px"}} key={post.id} to={`/post/${post.id}`}>
        <Post key={post.id}  postName={post.title} postBody={post.body}/>
        </Link>)
    })


    return (
        <>
        {postElements}
        </>
    )
}