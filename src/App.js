import "./App.css";
import Header from "./header";  
import Post from "./Post";
import SideMenu from "./SideMenue";



function App() {
  return (
      <div>
        <Header />
        {/* posts and side menu */}
        
        <div style={{display:"flex", width:"100%", justifyContent:"space-between", alignItems:"center"}}>
          

          {/* posts container */}
        <div style={{width:"70%"}}>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* posts container */}
        {/* side menu */} 
        <div style={{width:"30%"}}>
          <SideMenu />
        </div>
        {/* side menu */}
        </div>
        
        {/* posts and side menu */}
      </div>
      
      
  
  );
}

export default App;
