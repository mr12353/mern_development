import { useState } from "react";
import Signup from "../SignUp";
import './HomePage.css';


const personalData = [{
    id: 1,
    Name: "ravi",
    EmailId: "ravi@example.com",
    phoneNo: "1234567890",
    address: "1 Main St"
},
{
    id: 2,
    Name: "ravi2",
    EmailId: "ravi2@example.com",
    phoneNo: "1234567891",
    address: "2 Main St"
},
{
    id: 3,
    Name: "ravi3",
    EmailId: "ravi3@example.com",
    phoneNo: "1234567892",
    address: "3 Main St"
},
{
    id: 4,
    Name: "ravi4",
    EmailId: "ravi4@example.com",
    phoneNo: "1234567893",
    address: "4 Main St"
},
{
    id: 5,
    Name: "ravi5",
    EmailId: "ravi5@example.com",
    phoneNo: "1234567894",
    address: "5 Main St"
},
{
    id: 6,
    Name: "ravi6",
    EmailId: "ravi6@example.com",
    phoneNo: "1234567895",
    address: "6 Main St"
},
{
    id: 7,
    Name: "ravi7",
    EmailId: "ravi7@example.com",
    phoneNo: "1234567896",
    address: "7 Main St"
},
{
    id: 8,
    Name: "ravi8",
    EmailId: "ravi8@example.com",
    phoneNo: "1234567897",
    address: "8 Main St"
},
{
    id: 9,
    Name: "ravi9",
    EmailId: "ravi9@example.com",
    phoneNo: "1234567898",
    address: "9 Main St"
},
{
    id: 10,
    Name: "ravi10",
    EmailId: "ravi10@example.com",
    phoneNo: "1234567899",
    address: "10 Main St"
},
{
    id: 11,
    Name: "ravi11",
    EmailId: "ravi11@example.com",
    phoneNo: "12345678910",
    address: "11 Main St"
},

];

const HomePage = () => {
    const [isLoggedout, setIsLoggedout] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNo: "",
        address: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        console.log("name",userData.name);
        console.log("value", e.target.value);
        
    setUserData({
        ...userData,
        name: e.target.value
    })
}


    return (
        isLoggedout ? (<Signup />) : (
            <div>
                <h2> This is Home Page</h2>
                    <div className="personal-data-header">
                        <h3> Personal Data </h3>
                    </div>
                <div className="personal-data">
                    <table>
                        <thead>
                            <tr>
                                <td> ID </td>
                                <td> Name </td>
                                <td> Email </td>
                                <td> Phone </td>
                                <td> Address </td>
                                <td> Action </td>
                            </tr>
                        </thead>
                        <tbody>
                            {personalData.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.Name}</td>
                                    <td>{person.EmailId}</td>
                                    <td>{person.phoneNo}</td>
                                    <td>{person.address}</td>
                                    <button> Delete </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> <hr />
                
                <form>
                    <h2> Enter the Details</h2>
                    <div>
                    <label>Name:</label>
                    <input type = "text" placeholder = "Enter Name" name = "name"  value={userData.name} onChange = {handleChange} />
                    </div>
                    <div>
                    <label>Email:</label>
                    <input type = "email" placeholder = "Enter Email" name = "email" value={userData.email} onChange = {handleChange} />
                    </div>
                    <div>
                    <label>Phone Number:</label>
                    <input type = "text" placeholder = "Enter Phone Number" name = "phoneNo" value={userData.phoneNo} onChange = {handleChange} />
                    </div>
                    <div>
                    <label>Address:</label>
                    <input type = "text" placeholder = "Enter Address" name = "address" value={userData.address} onChange = {handleChange} />
                    </div>

                </form> <hr />

                <button onClick={() => {
                    localStorage.removeItem("user");
                    setIsLoggedout(true);
                }}> Logout </button>
            </div>)
    )
}

export default HomePage;  
