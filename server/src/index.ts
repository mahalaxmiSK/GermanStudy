import express from 'express';
import cors from 'cors';
import { initDb } from './db';
import progressRoutes from './routes/progress';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize database
initDb();

// Routes
app.use('/api/progress', progressRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
