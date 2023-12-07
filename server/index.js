// index.js
var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");

app.use(cors());

// Middleware to parse JSON in request body
app.use(express.json());

// Get all pets
app.get("/", function (req, res) {
  let sql = "SELECT * FROM pets";
  connection.query(sql, function (err, results) {
    res.send(results);
  });
});

// Add a new pet for adoption
app.post("/addPet", function (req, res) {
  const formData = req.body;
  
  // Construct the SQL query
  let sql = "INSERT INTO pets (name, age, gender, species, breed, behavior, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  // Execute the query
  connection.query(sql, [formData.name, formData.age, formData.gender, formData.species, formData.breed, formData.behavior, formData.image], function (err, result) {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ success: true });
    }
  });
});

app.delete("/deletePet/:id", function (req, res) {
  const petId = req.params.id;

  // Construct the SQL query
  const sql = "DELETE FROM pets WHERE pet_id = ?";

  // Execute the query
  connection.query(sql, [petId], function (err, result) {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      console.log('Pet deleted successfully');
      res.status(200).json({ success: true });
    }
  });
});

app.put("/updatePet/:id", function (req, res) {
  const petId = req.params.id;
  const formData = req.body;

  // Construct the SQL query
  const sql = "UPDATE pets SET name=?, age=?, gender=?, species=?, breed=?, behavior=?, image=? WHERE pet_id=?";

  // Execute the query
  connection.query(
    sql,
    [formData.name, formData.age, formData.gender, formData.species, formData.breed, formData.behavior, formData.image, petId],
    function (err, result) {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else {
        console.log('Pet updated successfully');
        res.status(200).json({ success: true });
        formData='';
      }
    }
  );
});
app.listen(4000, function () {
  console.log("App Listening on port 4000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});
