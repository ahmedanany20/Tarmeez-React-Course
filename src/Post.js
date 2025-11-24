export default function Post(props){
    return (
        <div style={
            {
                padding:"10px",
                border:"solid teal 5px",
                margin:"10%"
            }
        }>
            <h1>{props.name ?  props.name: ""}</h1>
            <h2> The is the post tilte </h2>
            <hr></hr>
            <p>
                thsi is the post
            </p>
        </div>

    )
}