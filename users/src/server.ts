import express, { Request, Response } from 'express';
import cors from 'cors';
//import neighborhoodRoutes from './routes/neighborhood.routes';

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Add other routes as needed
//app.use('/api', neighborhoodRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
