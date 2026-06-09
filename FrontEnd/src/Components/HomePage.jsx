import { useEffect, useState } from "react";
import './HomePage.css';


// const personalData = [{
//     id: 1,
//     name: "ravi",
//     emailId: "ravi@example.com",
//     phoneNo: "1234567890",
//     address: "1 Main St"
// },
// {
//     id: 2,
//     name: "ravi2",
//     emailId: "ravi2@example.com",
//     phoneNo: "1234567891",
//     address: "2 Main St"
// },
// {
//     id: 3,
//     name: "ravi3",
//     emailId: "ravi3@example.com",
//     phoneNo: "1234567892",
//     address: "3 Main St"
// },
// {
//     id: 4,
//     name: "ravi4",
//     emailId: "ravi4@example.com",
//     phoneNo: "1234567893",
//     address: "4 Main St"
// },
// {
//     id: 5,
//     name: "ravi5",
//     emailId: "ravi5@example.com",
//     phoneNo: "1234567894",
//     address: "5 Main St"
// },
// {
//     id: 6,
//     name: "ravi6",
//     emailId: "ravi6@example.com",
//     phoneNo: "1234567895",
//     address: "6 Main St"
// },
// {
//     id: 7,
//     name: "ravi7",
//     emailId: "ravi7@example.com",
//     phoneNo: "1234567896",
//     address: "7 Main St"
// },
// {
//     id: 8,
//     name: "ravi8",
//     emailId: "ravi8@example.com",
//     phoneNo: "1234567897",
//     address: "8 Main St"
// },
// {
//     id: 9,
//     name: "ravi9",
//     emailId: "ravi9@example.com",
//     phoneNo: "1234567898",
//     address: "9 Main St"
// },
// {
//     id: 10,
//     name: "ravi10",
//     emailId: "ravi10@example.com",
//     phoneNo: "1234567899",
//     address: "10 Main St"
// },
// {
//     id: 11,
//     name: "ravi11",
//     emailId: "ravi11@example.com",
//     phoneNo: "12345678910",
//     address: "11 Main St"
// },

// ];

const HomePage = ({ user, onLogout }) => {
    const [showForm, setShowForm] = useState(false);
    const [showtable, setShowtable] = useState(false);
    const [userData, setUserData] = useState([]);
    const [apiData, setApiData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNo: "",
        address: ""  
    });
console.log("apidata", apiData);

    useEffect(()=>{
        setApiData(apiData);
        console.log("apidata1", apiData);
    }, [])

    useEffect(()=>{
        fetch('http://localhost:8000/api/personalData')
        .then(response => response.json())
        .then(data => setApiData(data)) 
        .catch(error => console.error(error));
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setApiData([...apiData, {
            id: apiData[apiData.length - 1].id + 1,
            name: formData.name,
            emailId: formData.emailId,
            phoneNo: formData.phoneNo,
            address: formData.address
        }]
    );
    
    setFormData({
        name: "",
        emailId: "",
        phoneNo: "",
        address: ""
    });

    setShowtable(false);
    setShowForm(false);
    }

    const handleDelete =(id)=>{
        setApiData(previousdata => previousdata.filter(user => user.id !== id));
    }

    return (
        <div>
            <h2> This is Home Page {apiData.message} </h2>
            {!showtable && (
            <div className="personal-data-container">
                <h2 className="personal-data-header"> Personal Data </h2>
                <div >
                    <table className="personal-data-table-container">
                        <thead>
                            <tr>
                                <td> ID </td>
                                <td> Name </td>
                                <td> EmailId </td>
                                <td> Phone </td>
                                <td> Address </td>
                                <td> Action </td>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.emailId}</td>
                                    <td>{person.phoneNo}</td>
                                    <td>{person.address}</td>
                                    <button onClick = {() => handleDelete(person.id)}> Delete </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>)}

            {!showForm && (<div>
             <button className = "add-data-button" onClick={() => {
                    setShowForm(!showForm);
                    setShowtable(!showtable);
                }}> Add New Data </button> 
            </div> )}
             <hr />
           {showForm && (
                <form className="personal-data-form" onSubmit={handleSubmit}>
                    <h2 className="form-details-header"> Enter the Details</h2>
                    <div className="form-input-container">
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" placeholder="Enter Email" name="emailId" value={formData.emailId} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="number" placeholder="Enter Phone Number" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" placeholder="Enter Address" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit"> Submit </button>
                    </div>

                </form>
           )}
            <hr />

            <button className="logout" onClick={onLogout}> Logout </button>
        </div>
    )
}

export default HomePage;  
