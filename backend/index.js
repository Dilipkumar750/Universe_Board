const express = require("express")
const cors = require("cors")
require("dotenv").config()
const userRoute = require('./routes/adminRoutes')
const productRoute = require('./routes/productRoutes')
const connectDb = require('./config/db')
const testimonialsRouter = require('./routes/testimonials');

const app = express()
const PORT = process.env.PORT || 8000
connectDb();

app.use(cors())
app.use(express.json())

app.use('/auth',userRoute)
app.use('/product',productRoute)
app.use('/testimonials', testimonialsRouter);

app.get('/',(req,res)=>{
    res.send('Universe Backend Running')
})

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})