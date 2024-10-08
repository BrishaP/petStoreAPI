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

// CRUD Operation: Read
// RESTful Operation: Retrieve a resource (get a pet by ID)
// Example URL: /pets/{id}
// HTTP Method: GET

export async function getPetById(id) {
  try {
    const response = await axios.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving pet:', error);
    throw error;
  }
}