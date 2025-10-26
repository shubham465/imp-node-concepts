const express  = require('express')
const dbConnect = require('./utils/dbConnection')
require('dotenv').config()

const app = express()
dbConnect()

app.use(express.json())

app.use('/api/jobs', require('./routes/jobRoutes'))
app.use('/api/auth', require('./routes/userRoutes'))

app.listen(8000, (req, res)=> {
    console.log('listening in localhost 8000')
})
