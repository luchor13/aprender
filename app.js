const express= require ("express");
const bodyparser= require ("body-parser");

const app= express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
var hoy = new Date();
var dia= hoy.getDay();
var diax="";




  res.render('lista', {mostrar:diax});









});


app.listen(3000, function(){
  var dia1 = new Date();
  var n= dia1.getDay();
console.log(" Servidor funcionando " +n)


});
