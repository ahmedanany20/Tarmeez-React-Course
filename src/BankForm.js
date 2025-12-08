import "./BankForm.css";
import { useState } from "react";
import Modal from "./Modal";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { Link } from "react-router"; 


export default function BankForm() {
  const userData = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: "less than 1000$"
    });
    const [modalData, setModalData] = useState({
        isVisible: false,
        errorMassage: null
    })

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        // setFormData(prevFormData => ({
        //     ...prevFormData,
        //     [name]: type === "checkbox" ? checked : value
        // }));
      
        setFormData({...formData, [name]: type=== "checkbox" ? checked : value})
    }

    
    function handleSubmit(e) {
        e.preventDefault();

        if (formData.phoneNumber.length !== 10){
          console.log(formData);
          setModalData({...modalData,isVisible:true, errorMassage:'phone must be 10 digits'})}
        else if (formData.age < 18){
          setModalData({...modalData,isVisible:true, errorMassage:'age not allowed'})
        }
        else{
          setModalData({...modalData,isVisible:true, errorMassage:null})
        }


    }

    function hadleDivClick() {
      if (modalData.isVisible){
        setModalData({...modalData, isVisible:false})
      }}
    
    
    return (
    <div className="container" onClick={hadleDivClick}>
      <h1>Hello {userData.name} </h1>
      <form >
        <h1>Bank Form</h1>
        <hr></hr>

        
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name"
        onChange={handleChange} value={formData.name}></input>
        <br></br>


        <label>Phone number:</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone"
          onChange={handleChange}
          value={formData.phoneNumber}
        ></input>
        <br></br>
        <label>Age:</label>
        <input type="number" name="age" placeholder="Your Age" onChange={handleChange} value={formData.age}></input>
        <br></br>
        <label>Are You Employee ?</label>
        <input type="checkbox" name="isEmployee" onChange={handleChange} checked={formData.isEmployee}></input>
        <br></br>
        <label> Salary:</label>
        <select name="salary" onChange={handleChange} value={formData.salary}>
          <option value="less than 100$">less than 100$</option>
          <option value="less than 500$">less than 500$</option>
          <option value="less than 1000$">less than 1000$</option>
        </select>
        <br></br>
        <button onClick={handleSubmit} disabled={formData.name === '' || formData.phoneNumber === '' || formData.age ===''}>Submit</button>
      </form>
      {/* modal */}
      <Modal isVisible={modalData.isVisible} errorMassage={modalData.errorMassage}></Modal>
      
      <Link style={{textDecoration:"None", margin:"10px"}} to="/hello">
      <button >Go to hello component</button>
      </Link>
    </div>
  );
}


