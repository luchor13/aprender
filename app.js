const express= require ("express");
const bodyparser= require ("body-parser");

const app= express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
var hoy = new Date();
var dia= hoy.getDay();
var diax="";

switch (dia) {
  case 0:
  diax="Domingo"
  break;
  case 1:
  diax="Lunes"
  break;
  case 2:
  diax="Martes"
  break;
  case 3:
  diax="Miercoles"
  break;
  case 4:
  diax="Jueves"
  break;
  case 5:
  diax="Viernes"
  break;
  case 6:
  diax="Sabado"
  break;
  default:
  console.log("ERROR")

}


  res.render('lista', {mostrar:diax});









});


app.listen(3000, function(){
  var dia1 = new Date();
  var n= dia1.getDay();
console.log(" Servidor funcionando " +n)


});
