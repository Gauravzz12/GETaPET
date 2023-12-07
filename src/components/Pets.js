import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Modal, Form } from 'react-bootstrap';

function Pets() {
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [adoptionData, setAdoptionData] = useState({
    name: '',
    age: '',
    gender: 'Unknown',
    species: '',
    breed: '',
    behavior: '',
    image: null, // Use null for the file
  });
  const [updatePetId, setUpdatePetId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // Update the state based on the input type
    setAdoptionData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handlePutForAdoption = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUpdatePetId(null);
  };

  const uploadImage = async () => {
    const url = 'https://upload-image-and-return-url-by-thichthicodeteam.p.rapidapi.com/api/upload-image';

    const data = new FormData();
    data.append('file', adoptionData.image);

    const options = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'X-RapidAPI-Key': '15b9d7e5bcmsh1e999e69dd63d31p1d9b4bjsn0a18576a2867',
        'X-RapidAPI-Host': 'upload-image-and-return-url-by-thichthicodeteam.p.rapidapi.com',
      },
      body: data,
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      

      // Extract the substring (you might want to change this logic based on your requirements)
      var img = result.substring(9,result.length-2);
      console.log(img);
      console.log(adoptionData);
      // Update the state with the new image URL
      setAdoptionData((prevData) => ({
        ...prevData,
        image: img,
      }));
      adoptionData.image=img;
      console.log(adoptionData);

      // Handle the result as needed (update state, show a message, etc.)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAdoptSubmit = async () => {
    try {
      // Upload the image and update the state
      await uploadImage();

      if (updatePetId) {
        // Make a PUT request to the server endpoint
        await fetch(`http://localhost:4000/updatePet/${updatePetId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adoptionData),
        });
      } else {
        // Make a POST request to the server endpoint
        await fetch('http://localhost:4000/addPet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adoptionData),
        });
      }

      // Refresh the pets data after submission
      fetchPets();

      // Close the modal after submission.
      handleModalClose();
    } catch (error) {
      console.error('Error handling adoption submission:', error);
    }
  };

  const fetchPets = () => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error('Error fetching pets:', error);
      });
  };

  const handleDeletePet = (petId) => {
    // Make a DELETE request to the server endpoint
    fetch(`http://localhost:4000/deletePet/${petId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);

        // Refresh the pets data after deletion
        fetchPets();
      })
      .catch((error) => {
        console.error('Error deleting pet:', error);
      });
  };

  const handleUpdatePet = (pet) => {
    setAdoptionData({
      name: pet.name,
      age: pet.age,
      gender: pet.gender,
      species: pet.species,
      breed: pet.breed,
      behavior: pet.behavior,
      image: pet.image,
    });

    setUpdatePetId(pet.pet_id);

    setShowModal(true);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="pets-container mx-auto">
      <h1 className="text-center">
        Pets Available for Adoption
        <Button variant="primary" onClick={handlePutForAdoption}>
          Put for Adoption
        </Button>
      </h1>

      <Row xs={1} md={4} className="g-4">
        {pets.map((pet) => (
          <Col key={pet.pet_id}>
            <Card className="custom-card mb-3" style={{ border: '3px solid lightblue' }}>
              <Card.Img variant="top" src={pet.image} alt={pet.name} className="img" />
              <Card.Body>
                <Card.Text className="pet-name">{pet.name}</Card.Text>
                <Card.Text className="pet-info">Age: {pet.age} years</Card.Text>
                <Card.Text className="pet-info">Gender: {pet.gender}</Card.Text>
                <Card.Text className="pet-info">Species: {pet.species}</Card.Text>
                <Card.Text className="pet-info">Breed: {pet.breed}</Card.Text>
                <Card.Text className="pet-info">Behavior: {pet.behavior}</Card.Text>
                <Button variant="danger" onClick={() => handleDeletePet(pet.pet_id)} className="Crud-btn">
                  Delete
                </Button>

                <Button variant="primary" onClick={() => handleUpdatePet(pet)} className="Crud-btn">
                  Update
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Adoption Form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{updatePetId ? 'Update Pet' : 'Put for Adoption'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields for adoption data */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet's name"
                name="name"
                value={adoptionData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pet's age"
                name="age"
                value={adoptionData.age}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={adoptionData.gender} onChange={handleInputChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet's species"
                name="species"
                value={adoptionData.species}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet's breed"
                name="breed"
                value={adoptionData.breed}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBehavior">
              <Form.Label>Behavior</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter pet's behavior"
                name="behavior"
                value={adoptionData.behavior}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdoptSubmit}>
            {updatePetId ? 'Update Pet' : 'Submit for Adoption'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pets;
