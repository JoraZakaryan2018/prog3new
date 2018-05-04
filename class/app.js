var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("../public"));

app.get("/", function (req, res) {
    res.redirect("/public/index.html");
})


app.listen(3000);

var Grass = require("./class.grass.js");
var Xotaker = require("./class.eatgrass");
var Gishatich = require("./class.predator");
var Amenaker = require("./class.amenaker");
var KerparS = require("./class.kerps");

server.listen(process.env.PORT || 3000,function(){
    console.log('Server is running');
});

var matrix = [];
var grassArr = [];
var hivandgrassArr = [];
var bombArr = [];
var gishatichArr = [];
var xotakerArr = [];
var amenakerArr = [];
var kerparsArr = [];
var hivandArr = [];



for (var y = 0; y < 40; y++) {
    matrix[y] = [];
    for (var x = 0; x < 40; x++) {
        matrix[y].push(Math.floor(Math.random() * 2));
    }
}
for (var x = 0; x < 20; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}

for (var x = 0; x < 10; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}

for (var x = 0; x < 3; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var x = 0; x < 2; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 5;
}


setInterval(function () { drawS() }, 1000);
function drawS(){

    for (var i in grassArr) {
  grassArr[i].bazmanal();
  //  grassArr[i].hivandanal();
}
for (var i in xotakerArr) {
  xotakerArr[i].utel();
  xotakerArr[i].bazmanal();
  xotakerArr[i].mahanal();

}

for (var i in gishatichArr) {

  gishatichArr[i].utel();
  gishatichArr[i].mahanal();
}

for (var i in amenakerArr) {
  amenakerArr[i].sharjvel();
  amenakerArr[i].utel();
  amenakerArr[i].mahanal();


}
for (var i in kerparsArr) {
  kerparsArr[i].sharjvel();
  kerparsArr[i].bazmanal();

}
// for (var i in hivandArr) {
//   hivandArr[i].sharjvel();
//   hivandArr[i].hivandanal();

// }

    io.sockets.emit('matrix',matrix);
 }














