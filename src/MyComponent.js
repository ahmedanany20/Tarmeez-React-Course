export default function MyComponent(props) {
    return (
        <>
        <label>{props.label}</label>
        <input type="text" name={props.name} placeholder="Enter your name"
        onChange={props.handleChange} value={props.value}></input>
        <br></br>
        </>
    )
}