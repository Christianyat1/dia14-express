import express from 'express'
import { getProducts, getProductsByID, index } from './controller.js'

const app = express()

app.get('/', index)
app.get('/products', getProducts)
app.get('/products/:id', getProductsByID)

app.listen(3000, () => console.log('servidor ejecutandose en http://localhost:3000'))
