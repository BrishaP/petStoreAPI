import express from 'express';
import { addPet ,getPetById, updatePetById } from './api/petAPI.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// POST: Add a new pet
app.post('/pet', async (req, res) => {
    try {
      // Get these correct data bits from the request body 
      const { id, name, status } = req.body;
  
      // If any of those necessary data bits are missing, then it will have the error response message
      if (!id || !name || !status) {
        return res.status(400).json({ error: 'Missing required fields: id, name, status' });
      }
  
      // Make the request to the external Swagger Petstore API
      const newPet = await addPet(req.body);
  
      // Return the response from the external API
      res.status(201).json(newPet);
  
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });

  // GET: Retrieve a pet by ID
app.get('/pet/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Make the request to the external Swagger Petstore API
      const pet = await getPetById(id);
  
      // If the pet is not found, return a 404 error
      if (!pet) {
        return res.status(404).json({ error: 'No pet with this ID found' });
      }
  
      // Return the response from the external API
      res.status(200).json(pet);
  
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });

// PUT: Update a pet by ID
app.put('/pet/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPet = await updatePetById(id, req.body);
  
      if (!updatedPet) {
        return res.status(404).json({ error: 'No pet with this ID found' });
      }
  
      res.status(200).json(updatedPet);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });  

  // DELETE: Delete a pet by ID
app.delete('/pet/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPet = await deletePetById(id);
  
      if (!deletedPet) {
        return res.status(404).json({ error: 'No pet with this ID found' });
      }
  
      res.status(200).json({ message: 'Pet deleted successfully' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

