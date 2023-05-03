const express = require('express')
const port = process.env.PORT || 5000;
const app = express()
const chefs = require('./chefs_list.json')
app.get('/', (req, res) =>{
    res.send('Bangla spice is running')
});
app.get('/chefs', (req, res) =>{
    res.send(chefs)
});

app.listen(port, () => {
    console.log(`Bangla spice Api is running on port: ${port}`)
})