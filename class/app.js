var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("../public/index.html");
})

// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
// });
app.listen(3000);

var Grass = require("./class.grass.js");
var Xotaker = require("./class.eatgrass");
var Gishatich = require("./class.predator");
var Amenaker = require("./class.amenaker");
var KerparS = require("./class.kerps");

var matrix = [];
var grassArr = [];
var hivandgrassArr = [];
var bombArr = [];
var gishatichArr = [];
var xotakerArr = [];
var amenakerArr = [];
var kerparsArr = [];
var hivandArr = [];

var side = 10;

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
  for (var y = 0; y < matrix.length; y++) {
  for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
          var xot = new Grass(x, y);
          grassArr.push(xot);
      }
      else if (matrix[y][x] == 2) {
          var xot = new Xotaker(x, y);
          xotakerArr.push(xot);
      }
      else if (matrix[y][x] == 3) {
          var xot = new Gishatich(x, y);
          gishatichArr.push(xot);
      }
      else if (matrix[y][x] == 4) {
          var xot = new Amenaker(x, y);
          amenakerArr.push(xot);
      }
      else if (matrix[y][x] == 5) {
          var xot = new KerparS(x, y);
          kerparsArr.push(xot);
      }
      // else if (matrix[y][x] == 6) {
      //     var hiv = new Hivand(x, y);
      //     hivandArr.push(hiv);
      // }
  }
}
}
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













