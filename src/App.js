import "./App.css";
import Header from "./header";  
import Post from "./Post";
import SideMenu from "./SideMenue";



function App() {
  return (
      <div>
        <Header />
        {/* posts and side menu */}
        
        <div style={{display:"flex", width:"60%", justifyContent:"center", alignItems:"center"}}>
          

          {/* posts container */}
        <div style={{width:"70%"}}>
          <Post>
            <h1>20</h1>
            <h1>اكادميه ترميز</h1>
            <hr></hr>
            <p>
              اكادميه مخصصه لعلم البرمجه
            </p>

          </Post>

          <Post>
            <h1>
              Post2
            </h1>
            <hr></hr>
            <p>
              Heloo worled from post 2
            </p>

          </Post>

          <Post>
            <h1 style={{backgroundColor:"burlywood"}}>
              Heloo worled from post 3
            </h1  >
            <hr></hr>
            <p>
              This post 3
            </p>

          </Post>
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
