const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MongoDB connection error: MONGO_URI is missing in .env");
  process.exit(1);
}

// Connect to MongoDB with error handling
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log("✓ MongoDB connected successfully");
  // Start server only after DB connection
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("✗ MongoDB connection error:", err.message);
  process.exit(1);
});

const userSchema = new mongoose.Schema({
  name: String,
  emailId: String,
  phoneNo: Number,
  address: String
});

const User = mongoose.model("User", userSchema);




let personalData = [
  {
    id: 1,
    name: "ravi",
    emailId: "ravi@example.com",
    phoneNo: "1234567890",
    address: "1 Main St",
  },
  {
    id: 2,
    name: "ravi2",
    emailId: "ravi2@example.com",
    phoneNo: "1234567891",
    address: "2 Main St",
  },
  {
    id: 3,
    name: "ravi3",
    emailId: "ravi3@example.com",
    phoneNo: "1234567892",
    address: "3 Main St",
  },
  {
    id: 4,
    name: "ravi4",
    emailId: "ravi4@example.com",
    phoneNo: "1234567893",
    address: "4 Main St",
  },
  {
    id: 5,
    name: "ravi5",
    emailId: "ravi5@example.com",
    phoneNo: "1234567894",
    address: "5 Main St",
  },
  {
    id: 6,
    name: "ravi6",
    emailId: "ravi6@example.com",
    phoneNo: "1234567895",
    address: "6 Main St",
  },
  {
    id: 7,
    name: "ravi7",
    emailId: "ravi7@example.com",
    phoneNo: "1234567896",
    address: "7 Main St",
  },
  {
    id: 8,
    name: "ravi8",
    emailId: "ravi8@example.com",
    phoneNo: "1234567897",
    address: "8 Main St",
  },
  {
    id: 9,
    name: "ravi9",
    emailId: "ravi9@example.com",
    phoneNo: "1234567898",
    address: "9 Main St",
  },
  {
    id: 10,
    name: "ravi10",
    emailId: "ravi10@example.com",
    phoneNo: "1234567899",
    address: "10 Main St",
  },
  {
    id: 11,
    name: "ravi11",
    emailId: "ravi11@example.com",
    phoneNo: "12345678910",
    address: "11 Main St",
  },
];

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

// app.get("/api/personalData", (req, res) => {
//   console.log("abcd");
//   res.json(personalData);
// });

app.get("/api/personalData", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users", details: err.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await User.deleteOne({ _id: id });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json({ success: true, message: `User deleted` });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user", details: err.message });
  }
});

// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;

//   // Delete from database
//   console.log(`Deleting user ${id}`);

//   personalData = personalData.filter((item) => item.id !== Number(id));

//   res.json({
//     success: true,
//     message: `User ${id} deleted`,
//   });
// });

app.post("/users/addUserData", (req, res) => {
  const newUser = req.body;
  const updatedUser = {...newUser}
  console.log("newUser",newUser);
  console.log("updatedUser",updatedUser);

  const user = new User(updatedUser);

 user.save();

  // personalData.push(updatedUser);
  res.json({
    success: true
  });
});

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

