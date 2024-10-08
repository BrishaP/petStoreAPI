//ENDPOINTS I WANT: CRUD create, read, update/edit, delete
//-Add pet (POST)
//-Get Pet by Id (GET)
//-Update Pet (PUT)
//-Delete Pet (DELETE)
//(Create something , then read that same item, update that item and then delete that updated item)

import { describe, expect, test, jest } from '@jest/globals';
import axios from 'axios';
import { addPet ,getPetById, updatePetById,deletePetById } from '../../src/api/petAPI';

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

test('PUTs and updates a pet by id and returns the updated pet data', async () => {
  const petId = 12;
  const updatedPet = { id: 12, name: 'updatedTest', status: 'available' };
  axios.put.mockResolvedValue({ data: updatedPet });

  const result = await updatePetById(petId, updatedPet);

  expect(result).toEqual(updatedPet);
  expect(axios.put).toHaveBeenCalledWith(`/pets/${petId}`, updatedPet);
});

// CRUD Operation: Delete
// RESTful Operation: Delete an existing resource (delete a pet)
// Example URL: /pets/{id}
// HTTP Method: DELETE

test('DELETEs a pet by id and returns a success message', async () => {
  const petId = 12;
  axios.delete.mockResolvedValue({ data: {} });

  const result = await deletePetById(petId);

  expect(result).toEqual({});
  expect(axios.delete).toHaveBeenCalledWith(`/pets/${petId}`);
});