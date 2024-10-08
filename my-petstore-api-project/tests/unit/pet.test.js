//Example Jest documentation 
// import {describe, expect, test} from '@jest/globals';
// import {sum} from './sum';

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

//ENDPOINTS I WANT: CRUD create, read, update/edit, delete
//-Add pet (POST)
//-Get Pet by Id (GET)
//-Delete Pet (DELETE)
//-Update Pet (PUT)
import { describe, expect, test, jest } from '@jest/globals';
import axios from 'axios';
import { addPet ,getPetById } from '../../src/api/petAPI';
// import petAPI from '../../src/api/petAPI.js';
//Already testing the API directly
jest.mock('axios');




// CRUD Operation: Create
// RESTful Operation: Create a new resource (pet)
// Example URL: /pets
// HTTP Method: POST
describe('Pet API', () => {
test('POSTs and returns a pet with id: 12, name: test, and photoUrl: testURL', async () => {
  const newPet = { id: 12, name: 'test', status: 'available' };
  const response = { data: newPet };

  axios.post.mockResolvedValue(response);

  const result = await addPet(newPet);

  expect(result).toEqual(newPet);
  expect(axios.post).toHaveBeenCalledWith('/pets', newPet);
});
});

// CRUD Operation: Read
// RESTful Operation: Retrieve a resource (get a pet by ID)
// Example URL: /pets/{id}
// HTTP Method: GET

test('GETs a pet by id and returns the pet data', async () => {
  const petId = 12;
  const petData = { id: 12, name: 'test', status: 'available' };
  axios.get.mockResolvedValue({ data: petData });

  const result = await getPetById(petId);

  expect(result).toEqual(petData);
  expect(axios.get).toHaveBeenCalledWith(`/pets/${petId}`);
});

// CRUD Operation: Update
// RESTful Operation: Update an existing resource (update a pet)
// Example URL: /pets/{id}
// HTTP Method: PUT or PATCH

// CRUD Operation: Delete
// RESTful Operation: Delete an existing resource (delete a pet)
// Example URL: /pets/{id}
// HTTP Method: DELETE

