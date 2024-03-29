import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seeds from './routes/seeds.js';
import product from './routes/products.js';
import users from './routes/users.js';
import orders from './routes/orders.js';
import path from 'path'

dotenv.config();

mongoose
  .connect(process.env.LOCAL)
  .then(() => {
    console.log(`connected to db ${process.env.LOCAL}`);
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use('/api/seed', seeds);
app.use('/api/products', product);
app.use('/api/users', users);
app.use('/api/orders', orders);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/build/index.html')));

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});