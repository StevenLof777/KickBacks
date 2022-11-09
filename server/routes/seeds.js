import express from 'express';
import Product from '../models/Product.js';
import User from '../models/User.js';
import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'admin@email.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    // Crocs
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 6,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 7,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 8,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 9,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 10,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 11,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },
    {
      name: 'Crocs',
      slug: 'crocs',
      gender: 'Womens',
      category: 'Crocs',
      image: '/images/shoes/crocs.jpg',
      price: 29.99,
      size: 12,
      countInStock: 10,
      brand: 'Crocs',
      rating: 5,
      numReviews: 10,
      description: "Woman's pink Crocs",
    },

    // Converse
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 6,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 7,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 8,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 9,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 10,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 11,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },
    {
      name: 'Converse',
      slug: 'converse',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/converse.jpg',
      price: 59.99,
      size: 12,
      countInStock: 20,
      brand: 'Converse',
      rating: 3.0,
      numReviews: 10,
      description: 'Teal Converse hightop',
    },

    // New Balance
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 6,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 7,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 8,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 9,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 10,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 11,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },
    {
      name: 'New Balance',
      slug: 'new-balance',
      gender: 'Mens',
      category: 'Sneaker', 
      image: '/images/shoes/new-balance.jpg',
      price: 59.99,
      size: 12,
      countInStock: 15,
      brand: 'New Balance',
      rating: 4.5,
      numReviews: 14,
      description: 'White New Balance sneaker',
    },

    // Nike
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 6,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 7,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 8,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 9,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 10,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    {
      name: 'Nike',
      slug: 'nike',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/nike.webp',
      price: 45.59,
      size: 11,
      countInStock: 0,
      brand: 'Puma',
      rating: 4,
      numReviews: 10,
      description: 'Blue nike high top sneaker',
    },
    // Sketchers
    {
      name: 'Sketchers',
      slug: 'sketchers',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/sketchers.jpg',
      price: 39.99,
      size: 8,
      countInStock: 0,
      brand: 'Sketchers',
      rating: 3,
      numReviews: 10,
      description: 'Black Sketchers high top sneaker',
    },
    {
      name: 'Sketchers',
      slug: 'sketchers',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/sketchers.jpg',
      price: 39.99,
      size: 9,
      countInStock: 0,
      brand: 'Sketchers',
      rating: 3,
      numReviews: 10,
      description: 'Black Sketchers high top sneaker',
    },
    {
      name: 'Sketchers',
      slug: 'sketchers',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/sketchers.jpg',
      price: 39.99,
      size: 10,
      countInStock: 0,
      brand: 'Sketchers',
      rating: 3,
      numReviews: 10,
      description: 'Black Sketchers high top sneaker',
    },
    {
      name: 'Sketchers',
      slug: 'sketchers',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/sketchers.jpg',
      price: 39.99,
      size: 11,
      countInStock: 0,
      brand: 'Sketchers',
      rating: 3,
      numReviews: 10,
      description: 'Black Sketchers high top sneaker',
    },
    {
      name: 'Sketchers',
      slug: 'sketchers',
      gender: 'Mens',
      category: 'High Tops',
      image: '/images/shoes/sketchers.jpg',
      price: 39.99,
      size: 12,
      countInStock: 0,
      brand: 'Sketchers',
      rating: 3,
      numReviews: 10,
      description: 'Black Sketchers high top sneaker',
    },

    // Chacos
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 6,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 7,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 8,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 9,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 10,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
    {
      name: 'Chacos',
      slug: 'chacos',
      gender: 'Mens',
      category: 'Sandals',
      image: '/images/shoes/chacos.jpg',
      price: 69.99,
      size: 11,
      countInStock: 0,
      brand: 'Chaco',
      rating: 2.5,
      numReviews: 10,
      description: 'Black Chacos',
    },
  ],
};

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;