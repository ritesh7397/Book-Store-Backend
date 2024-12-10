const express = require('express'); 
const app = express(); 
require('dotenv').config();
const db = require('./db')

const PORT = process.env.PORT || 3001;


app.get('/',(req,res) =>
{
    res.send('BookStore Project')

})


// Import the Router files
const bookRoute = require('./routes/book.route.')


// Use the routers
app.use('/book', bookRoute);




app.listen(PORT,()=>  
{
    console.log(`Listening On Port ${PORT}`)
});


   

