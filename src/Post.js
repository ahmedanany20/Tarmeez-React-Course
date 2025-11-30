import { useParams } from "react-router"
import { useContext } from "react"
import { PostsContext } from "./contexts/PostsContexts"



export default function Post({postName, postBody}){
    const {id} = useParams()
    console.log(id)
    const posts = useContext(PostsContext)
    const post = posts.find(post => post.id === parseInt(id))
    console.log(post)
    return (
        <>
        <div style={
            {
                padding:"10px",
                border:"solid teal 5px",
                margin:"10%",
                textAlign:"center"
            }
        }>
            <h1>
            {post? post.title:''}
            {postName}
            </h1>
            <hr></hr>
            <p>
               {post? post.body:''} 
               {postBody}
            </p>
            
        </div>
        </>
    )
}