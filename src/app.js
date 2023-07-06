const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs')

const staticpath = path.join(__dirname , '../public')
const staticpath2 = path.join(__dirname , '../tamplates/views')
const partial_path = path.join(__dirname , '../tamplates/partials')

app.set('views' , staticpath2)
app.set('view engine' , 'hbs');
hbs.registerPartials(partial_path)

app.use(express.static(staticpath));

app.get('' , (req , res)=>{
    // res.send("welcome to thapa technical home channale")
    res.render('index')
})

app.get('/about' , (req , res)=>{
    // res.send("welcome to thapa  technical About channale")
    res.render('about')
})

app.get('/weather' , (req , res)=>{
    // res.send("welcome to thapa technical Weather channale")
    res.render('weather')
})

app.get('*' , (req , res)=>{
    // res.send('404 : opps page not found')
    res.render('404error')
})


app.listen(port , '127.0.0.1' , (req ,res)=>{
    console.log(`listening to the port at ${port} : `)
})