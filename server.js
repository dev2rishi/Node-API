require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')


const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middleware
app.use(cors(corsOptions))
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(errorMiddleware)
app.use(express.static(path.join(__dirname, './dist')));



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



