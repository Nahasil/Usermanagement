const express = require('express')
require('dotenv').config()



const {notFound,errorHandler}=require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const userRouter=require('./routes/userRoutes')
const adminRouter = require('./routes/adminRoutes')

const app = express()

connectDB()
app.use(express.json())


const port = process.env.PORT || 5000



//app.get('/', (req, res) => {
//    res.send('API is Running')
//})

//app.get('/api/notes', (req, res) => {
//    res.json(notes)
//})

//app.get('/api/notes/:id', (req, res) => {
//    const note = notes.find((n) => n._id === req.params.id)
//    res.send(note)
//})

app.use('/api/admin',adminRouter)

app.use('/api/users',userRouter)

app.use(errorHandler)
app.use(notFound)


app.listen(port, () => console.log(`server running on ${port}`))
