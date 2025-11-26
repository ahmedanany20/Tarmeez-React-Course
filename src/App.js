import "./App.css";
import Header from "./header";  
import Post from "./Post";
import SideMenu from "./SideMenue";
import MyForm from "./MyForm";



function App() {
  const posts =[
    {id:1, postName:'post1', postBody:'post 1body'},
    {id:2, postName:'post2', postBody:'post 2body'},
    {id:3, postName:'post3', postBody:'post 3body'}
  ]

  const postElements = posts.map(post =>{
    return <Post key={post.id} postName={post.postName} postBody={post.postBody}/>
  })
  return (
      <div>
        <Header />
        {/* posts and side menu */}
        
        <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
          

          {/* posts container */}
        <div style={{width:"70%"}}>
          {postElements}
        </div>
        {/* posts container */}
        {/* side menu */} 
        <div style={{width:"30%"}}>
          <SideMenu />
        </div>
        {/* side menu */}
        </div>
        
        {/* posts and side menu */}

        {/* testform */}
        <MyForm />
        {/* testform */}
      </div>

      
      
      
  
  );
}

export default App;
