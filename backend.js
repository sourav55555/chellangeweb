const express= require('express');
const app= express();
const path= require('path');
const hbs= require('hbs');
const port= process.env.PORT || 8000;


const staticPath= path.join(__dirname,"./public");
const templatePath= path.join(__dirname,"./templates/views");
const partialPath= path.join(__dirname,"./templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/crew",(req,res)=>{
   res.render('crew');  
})
app.get("/destination",(req,res)=>{
    res.render('destination');
})
app.get("/technology",(req,res)=>{
    res.render('technology');
})

app.listen(port,()=>{
    console.log('listening to the port')
})