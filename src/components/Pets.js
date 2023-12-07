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
    image: '',
  });
  const [updatePetId, setUpdatePetId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdoptionData({ ...adoptionData, [name]: value });
  };

  const handlePutForAdoption = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setUpdatePetId(null); // Clear updatePetId when closing the modal
  };

  const handleAdoptSubmit = () => {
    // Check if updatePetId exists, if so, update the pet
    if (updatePetId) {
      // Make a PUT request to the server endpoint
      fetch(`http://localhost:4000/updatePet/${updatePetId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(adoptionData),
})

        .then(response => response.json())
        .then(data => {
          // Handle the response data if needed
          console.log(data);

          // Refresh the pets data after update
          fetchPets();
        })
        .catch(error => {
          console.error('Error updating pet:', error);
        });
    } else {
      // Make a POST request to the server endpoint
      fetch('http://localhost:4000/addPet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adoptionData),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data if needed
          console.log(data);

          // Refresh the pets data after insertion
          fetchPets();
        })
        .catch(error => {
          console.error('Error submitting for adoption:', error);
        });
    }
    setAdoptionData({
      name: '',
      age: '',
      gender: 'Unknown',
      species: '',
      breed: '',
      behavior: '',
      image: '',
    });
    // Close the modal after submission.
    handleModalClose();
  };

  const fetchPets = () => {
    fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(data => {
        setPets(data);
      })
      .catch(error => {
        console.error('Error fetching pets:', error);
      });
  };

  const handleDeletePet = (petId) => {
    // Make a DELETE request to the server endpoint
    fetch(`http://localhost:4000/deletePet/${petId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data if needed
        console.log(data);

        // Refresh the pets data after deletion
        fetchPets();
      })
      .catch(error => {
        console.error('Error deleting pet:', error);
      });
  };

  const handleUpdatePet = (pet) => {
    // Set the pet data to the modal form
    setAdoptionData({
      name: pet.name,
      age: pet.age,
      gender: pet.gender,
      species: pet.species,
      breed: pet.breed,
      behavior: pet.behavior,
      image: pet.image,
    });

    // Set the pet ID to updatePetId
    setUpdatePetId(pet.pet_id);

    // Open the modal
    setShowModal(true);
  };

  useEffect(() => {
    // Fetch pets data as before...
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
        {pets.map(pet => (
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
                <Button variant="danger" onClick={() => handleDeletePet(pet.pet_id)} className='Crud-btn'>
                  Delete
                </Button>
                
                <Button variant="primary" onClick={() => handleUpdatePet(pet)} className='Crud-btn'>
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
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet's image URL"
                name="image"
                value={adoptionData.image}
                onChange={handleInputChange}
              />
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
