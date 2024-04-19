import express from 'express'

const app = express()
app.get('/', (req, res) => res.send('<h1>Bienvenido a mi API</h1>'))

app.get('/products', (req, res) => res.send('Mostrando productos en formato json...'))

app.get('/products/:id', (req, res) => {
  res.send('Mostrando rpducto con el id...')
})

app.listen(3000, () => console.log('servidor ejecutandose en http://localhost:3000'))
