import "./Maincimtent.css"
import Posts from "./posts.js"
import Side from "./Side.js"    


export default function MainContent (){
    return (
        <div className="mycontent">
            <Posts/>
            <Side/>

        </div>        
    )
}
