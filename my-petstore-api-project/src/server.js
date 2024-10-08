import express from 'express';
import { addpet } from './api/petAPI'

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
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });