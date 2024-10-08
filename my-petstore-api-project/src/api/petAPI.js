//import axioE Get request from s using ESModules import and export 
//EXAMPLE GET REQ USING COMMON.JS
// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// CRUD Operation: Create
// RESTful Operation: Create a new resource (pet)
// Example URL: /pets
// HTTP Method: POST

// CRUD Operation: Read
// RESTful Operation: Retrieve a resource (get a pet by ID)
// Example URL: /pets/{id}
// HTTP Method: GET

// CRUD Operation: Update
// RESTful Operation: Update an existing resource (update a pet)
// Example URL: /pets/{id}
// HTTP Method: PUT or PATCH

// CRUD Operation: Delete
// RESTful Operation: Delete an existing resource (delete a pet)
// Example URL: /pets/{id}
// HTTP Method: DELETE


// CRUD Operation: Create
// RESTful Operation: Create a new resource (pet)
// Example URL: /pets
// HTTP Method: POST

//function to add a pet to the swaggers/pet endpoint

// app.post('/pet', async (req, res) => {
//   try {
//     // Get these correct data bits from the request body 
//     const { id, name, status } = req.body;

//     // If any of those necessary data bits are missing, then it will have the error response message
//     if (!id || !name || !status) {
//       return res.status(400).json({ error: 'Missing required fields: id, name, status' });
//     }

//     // Make the request to the external Swagger Petstore API
//     const newPet = await petAPI.addPet(req.body);

//     // Return the response from the external API
//     res.status(201).json(newPet);

//   } catch (error) {
//     // Handle any errors
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });
  
//import axioE Get request from s using ESModules import and export 
import axios from 'axios';

export async function addPet(pet) {
  try {
    const response = await axios.post('/pets', pet);
    return response.data;
  } catch (error) {
    console.error('Error adding pet:', error);
    throw error;
  }
}