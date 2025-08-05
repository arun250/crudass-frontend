import {useState } from "react";
import "./index.css";
import { useNavigate} from "react-router-dom"
import Header from "../Header/index.jsx"
function UserDetailsCard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null)
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const navigate = useNavigate();
 

    
const handleEdit = () => {
    setEditingUser()
      alert("Edited successful")
  }
  
  const handleChange = (e) => {
    setFormData((prev=> ({...prev,[e.target.name]: e.target.value })))
  }
  
  const handleUpdate = async () => {
        setEditingUser(null);
        setMessage()
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
       
    }

  const handleDelete = () => {
   
      alert("successfully deleted")
     
}

  return (
    <>
    <Header/>
    <div className='userDetailsContainer'>
      <h2>Registered User Details </h2>
          <table>
              <thead>
                  <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>PhoneNumber</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Actions</th>
                      <th>Remove</th>
                   </tr>
              </thead>
              <tbody>
  
  <tr>
      
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td><button className="btn edit" onClick={() => handleEdit()}>Edit</button></td>
        <td><button className="btn delete" onClick={() => handleDelete()}>Delete</button></td>
      
    
  </tr>
            </tbody>
        </table>
      </div>
    
        </>
  )
}

export default UserDetailsCard