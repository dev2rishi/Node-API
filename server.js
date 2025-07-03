import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import productRoute from './routes/productRoute.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'

const app = express()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND
const __dirname = path.dirname(fileURLToPath(import.meta.url))

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middleware
app.use(cors(corsOptions))
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(errorMiddleware)
// app.use(express.static(path.join(__dirname, './dist')));



app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

// routes middleware
app.use('/api/products', productRoute)

// mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to mongodb')

    app.listen(PORT, () => {
        console.log(`NODE API app is running on port ${PORT}`)
    })
})
  .catch((e) => {
    console.log(e)
  })
  // .finally(() => {
  //   mongoose.connection.close()
  // }) 



