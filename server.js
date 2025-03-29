require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8800;


const corsOptions = {
  origin: 'tresor-commerce.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});