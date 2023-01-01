const express= require ("express");
const bodyParser= require ("body-parser");
const date= require(__dirname + "/date.js");
const app= express();
let items  = [];
let trabajoitems = [];



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

let day = date.damedia();
  res.render('lista', {mostrar: day, tarea1: items});




});


app.post("/", function(req, res){
  let item = req.body.tarea;
if(req.body.listax === "hola"){
trabajoitems.push(item);
res.redirect("/trabajo")
} else {
items.push(item);
res.redirect("/");
}
console.log(req.body)
});


app.get("/trabajo", function(req, res){
res.render("lista", {mostrar:"hola", tarea1: trabajoitems});



})
app.get("/sobre", function(req, res){
res.render("sobre");



})


app.listen(3000, function(){
  let dia1 = new Date();
  let n= dia1.getDay();
console.log(" Servidor funcionando " +n)


});
