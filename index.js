const express = require('express')
const port = process.env.PORT || 5000;
const cors = require('cors')
const app = express()
const chefs = require('./chefs_list.json')
const recipes = require('./some_recipes.json')
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Bangla spice is running')
});
app.get('/chefs', (req, res) =>{
    res.send(chefs)
});
app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef)
});
app.get('/recipes', (req, res) =>{
    
    res.send(recipes)
});

app.listen(port, () => {
    console.log(`Bangla spice Api is running on port: ${port}`)
})