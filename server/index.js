var express = require("express");
var app = express();
var cors = require("cors");
var connection = require("./database");

app.use(cors());
app.use(express.json());

app.post("/addPet", function (req, res) {
  const formData = req.body;
  let sql = "INSERT INTO pets (name, age, gender, species, breed, behavior, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
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
  const sql = "DELETE FROM pets WHERE pet_id = ?";

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
  const sql = "UPDATE pets SET name=?, age=?, gender=?, species=?, breed=?, behavior=?, image=? WHERE pet_id=?";
 
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
      }
    }
  );
});


app.get("/", function (req, res) 

{ 

  const sortOption = req.query.sort ||'default';
  const filterOption=req.query.f || 'default';
  const filterValue=req.query.t || 'default';

  if (sortOption === 'default' && filterOption === 'default') {
    sql = 'SELECT * FROM pets';
  } else if (sortOption !== 'default' && filterOption !== 'default') {
   sql = `SELECT * FROM pets WHERE ${filterOption} = '${filterValue}' ORDER BY ${sortOption}`;

  } else if (sortOption === 'default' && filterOption !== 'default') {
    sql = `SELECT * FROM pets WHERE ${filterOption} = '${filterValue}'`;
  } else {
    sql = `SELECT * FROM pets ORDER BY ${sortOption}`;
  }
  
  connection.query(sql, function (err, results) {
    res.send(results);

  });
});



app.listen(4000, function () {
  console.log("App Listening on port 4000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected");
  });
});
