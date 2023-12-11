import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button, Modal, Form } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Pets() {
  const [pets, setPets] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('default');
  const [selectedFilterOption, setSelectedFilterOption] = useState('default');
  const [userText, setUserText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);


  const handleSortSelect = (option) => {
    setSelectedSortOption(option);
  };

  const handleFilterSelect = (option) => {
    setSelectedFilterOption(option);
    setShowFilterModal(true);
  };

  const handleUserTextChange = (event) => {
    setUserText(event.target.value);
  };
  const handleFilterModalSave = () => {
    setUserText(userText);
    setShowFilterModal(false);
  };

  const [adoptionData, setAdoptionData] = useState({
    name: '',
    age: '',
    gender: 'Unknown',
    species: '',
    breed: '',
    behavior: '',
    image: null,
  });
  const [updatePetId, setUpdatePetId] = useState(null);
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

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
      
      var img = result.substring(9,result.length-2);

      setAdoptionData((prevData) => ({
        ...prevData,
        image: img,
      }));
      adoptionData.image=img;

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAdoptSubmit = async () => {
    try {
      await uploadImage();

      if (updatePetId) {
        await fetch(`http://localhost:4000/updatePet/${updatePetId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adoptionData),
        });
      } else {
        await fetch('http://localhost:4000/addPet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adoptionData),
        });
      }

      fetchPets();
      handleModalClose();
    } catch (error) {
      console.error('Error handling adoption submission:', error);
    }
  };
  const fetchPets = async () => {
    try {
      const apiUrl = `http://localhost:4000/?sort=${selectedSortOption}&f=${selectedFilterOption}&t=${userText}`;
const response = await fetch(apiUrl);

      const data = await response.json();
      setPets(data);

    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleDeletePet = (petId) => {
    fetch(`http://localhost:4000/deletePet/${petId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
  }, [fetchPets]);

  return (
    <div className="pets-container mx-auto">
      <div>
      <h1 className="text-center" style={{fontFamily:'cursive',color:'red'}}>
        Pets Available for Adoption
      </h1>
      <Form>
      <Form.Group controlId="sortDropdown" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By: {selectedSortOption}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSortSelect('default')}>None</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('name')}>Name</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('age')}>Age</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('gender')}>Gender</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('species')}>Species</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('breed')}>Breed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter By: {selectedFilterOption}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterSelect('default')}>None</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect('age')}>Age</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect('gender')}>Gender</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect('species')}>Species</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterSelect('breed')}>Breed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      </Form.Group>
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Enter Text for {selectedFilterOption}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Control
      type="text"
      placeholder={`Enter Value for ${selectedFilterOption}...`}
      value={userText}
      onChange={handleUserTextChange}
    />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowFilterModal(false)}>
      Close
    </Button>
    <Button variant="primary" onClick={handleFilterModalSave}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
    </Form>
      </div>
      <Row xs={1} md={4} className="g-4">
        {pets.map((pet) => (
          <Col key={pet.pet_id}>
            <Card className="custom-card mb-3" style={{ border: '3px solid lightblue' }}>
            <Link to={`/Adopt`}>
                <Card.Img
                  variant="top"
                  src={pet.image}
                  alt={pet.name}
                  className="img"
                />
              </Link>
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
        <Col>
          <Card
            className="custom-card mb-3"
            style={{ border: '3px dashed lightgreen', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={handlePutForAdoption}
          >
            <Card.Body>
              <Card.Text style={{ fontSize: '2em', fontWeight: 'bold',textAlign: 'center' }}>+</Card.Text>
              <Card.Text style={{ textAlign: 'center', fontWeight: 'bold',fontSize:'large' }}>Put for Adoption</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{updatePetId ? 'Update Pet' : 'Put for Adoption'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
