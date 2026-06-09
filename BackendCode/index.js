const express = require('express');
const cors=require('cors'); 

const app = express();

const PORT = 8000;

const personalData = [{
    id: 1,
    name: "ravi",
    emailId: "ravi@example.com",
    phoneNo: "1234567890",
    address: "1 Main St"
},
{
    id: 2,
    name: "ravi2",
    emailId: "ravi2@example.com",
    phoneNo: "1234567891",
    address: "2 Main St"
},
{
    id: 3,
    name: "ravi3",
    emailId: "ravi3@example.com",
    phoneNo: "1234567892",
    address: "3 Main St"
},
{
    id: 4,
    name: "ravi4",
    emailId: "ravi4@example.com",
    phoneNo: "1234567893",
    address: "4 Main St"
},
{
    id: 5,
    name: "ravi5",
    emailId: "ravi5@example.com",
    phoneNo: "1234567894",
    address: "5 Main St"
},
{
    id: 6,
    name: "ravi6",
    emailId: "ravi6@example.com",
    phoneNo: "1234567895",
    address: "6 Main St"
},
{
    id: 7,
    name: "ravi7",
    emailId: "ravi7@example.com",
    phoneNo: "1234567896",
    address: "7 Main St"
},
{
    id: 8,
    name: "ravi8",
    emailId: "ravi8@example.com",
    phoneNo: "1234567897",
    address: "8 Main St"
},
{
    id: 9,
    name: "ravi9",
    emailId: "ravi9@example.com",
    phoneNo: "1234567898",
    address: "9 Main St"
},
{
    id: 10,
    name: "ravi10",
    emailId: "ravi10@example.com",
    phoneNo: "1234567899",
    address: "10 Main St"
},
{
    id: 11,
    name: "ravi11",
    emailId: "ravi11@example.com",
    phoneNo: "12345678910",
    address: "11 Main St"
},

];

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.get('/api/personalData', (req, res) => {
    console.log("abcd");
res.json([{personalData}]);
}); 
// name : personalData.name , emailId: personalData.emailId, address: personalData.address
app.get('/', (req, res) => {

  res.send('Hello Express!');

});
 
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
 