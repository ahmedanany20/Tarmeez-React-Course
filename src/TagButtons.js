import "./TagButoonStyl.css"




export default function Button({children}){
  
    return (
        <button className="tagButton">
            {children}
        </button>
    )
}