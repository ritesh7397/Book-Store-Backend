const express = require('express'); 
const app = express(); 
require('dotenv').config();
const db = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 4001;



app.use(express.json());

app.use(cors());




app.get('/',(req,res) =>
{
    res.send('BookStore Project')

})


// Import the Router files
const bookRoute = require('./routes/book.route.')
const userRoute = require('./routes/user.route')

// Use the routers
app.use('/book', bookRoute);
app.use('/user', userRoute)



app.listen(PORT,()=>  
{
    console.log(`Listening On Port ${PORT}`)
});


   



