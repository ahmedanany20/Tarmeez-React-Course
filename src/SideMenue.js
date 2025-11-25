import Button from "./TagButtons"
import logo from './logo192.png';



export default function SideMenu(){
    return(
        <div style={{margin:"25px", border:"solid teal 5px"}} >
            <Button>
                <h1>New</h1>

            </Button>
            <Button>
                <h1>Home</h1>
        
                <img src={logo} alt="" style={{width:"20px", height:"20px"}}/>

            </Button>
            <Button></Button>
           
        </div>
    )
}