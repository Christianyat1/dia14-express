import express from 'express'
import { getProducts, getProductsByID, index } from './controller.js'

const app = express()
app.get('/', (req, res) => res.send('<h1>Bienvenido a mi API</h1>'))

app.get('/products', getProducts())

app.get('/products/:id', getProductsByID())

app.listen(3000, () => console.log('servidor ejecutandose en http://localhost:3000'))
  