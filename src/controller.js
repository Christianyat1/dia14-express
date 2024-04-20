import { pool } from './db.js'

export const index = (req, res) => res.send('<h1>Bienvenido a mi API</h1>')
export const getProducts = async (req, res) => {
  try {
    const [productos] = await pool.query('SELECT * FROM product LIMIT 100')
    res.json(productos)
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', detail: error.message })
  }
}
export const getProductsByID = async (req, res) => {
  try {
    const { id } = req.params

    // Validar que el parametro id sea un numero
    const idNumber = parseInt(id)

    console.log(idNumber)

    if (isNaN(idNumber)) {
      return res.status(400).json({ message: 'El id debe ser un numero' })
    }

    // Traer el producto de la base de datos
    const [producto] = await pool.execute('SELECT * FROM product WHERE product_id=?', [idNumber])

    // validar que exista el producto
    if (producto.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado ' })
    }
    res.json(producto[0])
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error interno', detail: error.message })
  }
}
