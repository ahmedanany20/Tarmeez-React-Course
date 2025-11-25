export default function Post({name , children}){
    return (
        
        <div style={
            {
                padding:"10px",
                border:"solid teal 5px",
                margin:"10%",
                textAlign:"center"
            }
        }>
            {children}
        </div>

    )
}