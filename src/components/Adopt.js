import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const YourFormComponent = () => {
  const [adoptionData, setAdoptionData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    species: '',
    breed: '',
    behavior: '',
    image: '', 
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // Update the state based on the input type
    setAdoptionData((prevData) => ({
      ...prevData,
      
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
      console.log(result);
      var img=result;
      adoptionData.image=img;
      console.log(adoptionData);
      // Handle the result as needed (update state, show a message, etc.)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {/* Your form fields */}
      {/* ... */}

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleInputChange}
        />
      </Form.Group>

      {/* Add a submit button */}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default YourFormComponent;
