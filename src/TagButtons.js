import "./TagButoonStyl.css"




export default function Button({title, children}){

    return (
        <button className="tagButton">
            {title}
            {children}
        </button>
    )
}