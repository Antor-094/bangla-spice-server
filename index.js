const express = require('express')
const port = process.env.PORT || 5000;
const app = express()

app.get('/', (req, res) =>{
    res.send('Bangla spice is running')
});

app.listen(port, () => {
    console.log(`Bangla spice Api is running on port: ${port}`)
})