

exports.damedia = function (){

let hoy = new Date();

let options = {
weekday:"long",
day:"numeric",
month:"long",

};




return hoy.toLocaleDateString("en-ES", options);
};

exports.dayx = function (){

let hoy = new Date();

let options = {
weekday:"long",


};




return hoy.toLocaleDateString("en-ES", options);
};
