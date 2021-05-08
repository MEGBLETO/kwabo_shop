import  express  from  'express'
import dotenv from 'dotenv'
import products from  './products.js'
/*make my console pop that shit */
import colors from 'colors'

/*importing the connection file from congig */
import connectDB from './config/db.js'

dotenv.config()

/*caalling myconnection that has been imported */
connectDB()

const app = express()




app.get('/', (req, res) =>{
  res.send("Api is working")
})


app.get('/api/products', (req, res) =>{
  res.send(products)
})


app.get('/api/products/:id', (req, res) =>{
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})




const PORT = process.env.port || 5000


app.listen(PORT, console.log(`server  running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));