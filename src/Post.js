export default function Post({postName , postBody}){
    return (
        
        <div style={
            {
                padding:"10px",
                border:"solid teal 5px",
                margin:"10%",
                textAlign:"center"
            }
        }>
            <h1>
            {postName}
            </h1>
            <hr></hr>
            <p>
                {postBody}
            </p>
            
        </div>

    )
}