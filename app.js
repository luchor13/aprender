const express= require ("express");
const bodyParser= require ("body-parser");

const app= express();
var items = [];



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
var hoy = new Date();

var options = {
weekday:"long",
day:"numeric",
month:"long",

};




var diax = hoy.toLocaleDateString("en-ES", options);

  res.render('lista', {mostrar: diax, tarea1: items});




});


app.post("/", function(req, res){
var item = req.body.tarea;
items.push(item);
console.log(item);
res.redirect("/");
});





app.listen(3000, function(){
  var dia1 = new Date();
  var n= dia1.getDay();
console.log(" Servidor funcionando " +n)


});
