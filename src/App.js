import "./App.css";
import BankForm from "./BankForm";
import { Route, Routes } from "react-router";
import Hello from "./hello";
import Post from "./Post";
import {PostsContext} from "./contexts/PostsContexts"
import { UserContext } from "./contexts/UserContext";
import NotFound from "./NotFound";


function App() {
  const postsData = [
          {id:1, title:"post 1", body:"post 1 body"},
          {id:2, title:"post 2", body:"post 2 body"},
          {id:3, title:"post 3", body:"post 3 body"},
          {id:4, title:"post 4", body:"post 4 body"},
          {id:5, title:"post 5", body:"post 5 body"},
      ]
  
  
  return (
    <PostsContext.Provider value={postsData}>
    <Routes>
      <Route path="/hello" element={<Hello />} />
      <Route
        path="/"
        element={
          <UserContext.Provider
            value={{
              userName: "anany",
              name: "ahmed anany",
              email: "anany@gmail.com",
            }}
          >
            <div className="App">
              {/* Bank Form  */}
              <BankForm />

              {/* posts and side menu */}
            </div>
          </UserContext.Provider>
        }
      />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<NotFound/>}></Route>

    </Routes>
    </PostsContext.Provider>
  );
}

export default App;
