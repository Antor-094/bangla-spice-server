const express = require('express')
const port = process.env.PORT || 5000;
const app = express()

app.get('/', (req, res) =>{
    res.send('Bangla spice is running')
});

