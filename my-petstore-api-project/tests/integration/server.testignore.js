// This is what my supertest endpoint tests would look like to test the actual server endlpoints once I create them 
// Make sure I install supertest first npm install supertest

// import request from 'supertest';
// import express from 'express';
// import { addPet, getPetById, updatePetById, deletePetById } from '../../src/api/petAPI.js';
// import mongoose from 'mongoose';

// const app = express();
// app.use(express.json());

// // Define routes for testing
// app.post('/pet', async (req, res) => {
//   try {
//     const { id, name, status } = req.body;

//     if (!id || !name || !status) {
//       return res.status(400).json({ error: 'Missing required fields: id, name, status' });
//     }

//     const newPet = await addPet(req.body);
//     res.status(201).json(newPet);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/pet/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pet = await getPetById(id);

//     if (!pet) {
//       return res.status(404).json({ error: 'No pet with this ID found' });
//     }

//     res.status(200).json(pet);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put('/pet/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedPet = await updatePetById(id, req.body);

//     if (!updatedPet) {
//       return res.status(404).json({ error: 'No pet with this ID found' });
//     }

//     res.status(200).json(updatedPet);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.delete('/pet/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedPet = await deletePetById(id);

//     if (!deletedPet) {
//       return res.status(404).json({ error: 'No pet with this ID found' });
//     }

//     res.status(200).json({ message: 'Pet deleted successfully' });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// describe('Pet API Endpoints', () => {
//   beforeAll(async () => {
//     await mongoose.connect('mongodb://localhost:27017/petstore', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   test('POST /pet - should create a new pet', async () => {
//     const newPet = { id: 12, name: 'test', status: 'available' };
//     const response = await request(app).post('/pet').send(newPet);
//     expect(response.status).toBe(201);
//     expect(response.body).toEqual(newPet);
//   });

//   test('GET /pet/:id - should retrieve a pet by ID', async () => {
//     const petId = 12;
//     const petData = { id: 12, name: 'test', status: 'available' };
//     await addPet(petData); // Ensure the pet exists in the database

//     const response = await request(app).get(`/pet/${petId}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(petData);
//   });

//   test('PUT /pet/:id - should update a pet by ID', async () => {
//     const petId = 12;
//     const updatedPet = { id: 12, name: 'updatedTest', status: 'available' };
//     await addPet({ id: 12, name: 'test', status: 'available' }); // Ensure the pet exists in the database

//     const response = await request(app).put(`/pet/${petId}`).send(updatedPet);
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(updatedPet);
//   });

//   test('DELETE /pet/:id - should delete a pet by ID', async () => {
//     const petId = 12;
//     await addPet({ id: 12, name: 'test', status: 'available' }); // Ensure the pet exists in the database

//     const response = await request(app).delete(`/pet/${petId}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({ message: 'Pet deleted successfully' });
//   });
// });