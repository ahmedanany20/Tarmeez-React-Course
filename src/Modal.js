import "./BankForm.css";


export default function Modal ({isVisible, errorMassage}) {
    if (isVisible === true) {
    return (
        <div id="modal">
            <div id="modal-content">
                <h1 style={{color:errorMassage ? 'red':"green"}}>{errorMassage !=null ? errorMassage : " The form has ben submitted successfully"}</h1>
            </div>
        </div>
    )}
    else{
        return (<></>)
    }
}

