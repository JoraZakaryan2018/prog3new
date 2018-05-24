var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var timeEx = 0;
var exanak = "garun";
var m_tiv = 0;

app.use(express.static("../public"));

app.get("/", function (req, res) {
    res.redirect("/public/index.html");
})


//app.listen(3000);
Grass = require("./class.grass.js");
Xotaker = require("./class.eatgrass");
Gishatich = require("./class.predator");
Amenaker = require("./class.amenaker");
KerparS = require("./class.kerps");
SuperK = require("./class.superkerpar.js");

server.listen(process.env.PORT || 3000, function () {
    console.log('Server is running');
});

matrix = [
    // [1, 1, 0, 0],
    // [2, 2, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
    // [0, 0, 0, 0],
];
grassArr = [];
hivandgrassArr = [];
gishatichArr = [];
xotakerArr = [];
amenakerArr = [];
kerparsArr = [];
superkArr = [];


grassArrtiv = [];
hivandgrassArrtiv = [];
gishatichArrtiv = [];
xotakerArrtiv = [];
amenakerArrtiv = [];
kerparsArrtiv = [];
superkArrtiv = [];




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

for (var x = 0; x < 8; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var x = 0; x < 2; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 5;
}
for (var x = 0; x < 3; x++) {

        matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 6;
    }

//asdasdvagycdqwyt
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var xot = new Grass(x, y);
            grassArr.push(xot);
            grassArrtiv.push(xot);
        }
        else if (matrix[y][x] == 2) {
            var r = (Math.round(Math.random()) / 2);
            var xot = new Xotaker(x, y, r);
            xotakerArr.push(xot);
            xotakerArrtiv.push(xot);
            matrix[y][x] += r;
            // console.log(r);

        }
        else if (matrix[y][x] == 3) {
            var r = (Math.round(Math.random()) / 2);
            var xot = new Gishatich(x, y, r);
            gishatichArr.push(xot);
            gishatichArrtiv.push(xot);
            matrix[y][x] += r;
            // console.log("gishatich: " + matrix[y][x]);
        }
        else if (matrix[y][x] == 4) {
            var r = (Math.round(Math.random()) / 2);
            var xot = new Amenaker(x, y, r);
            amenakerArr.push(xot);
            amenakerArrtiv.push(xot);
            matrix[y][x] += r;
        }
        else if (matrix[y][x] == 5) {
            // var r = (Math.round(Math.random()) / 2);
            var xot = new KerparS(x, y);
            kerparsArr.push(xot);
            kerparsArrtiv.push(xot);
            // matrix[y][x] += r;
        }
        else if (matrix[y][x] == 6) {
            var xot = new SuperK(x, y);
            superkArr.push(xot);
            superkArrtiv.push(xot);
        }
    }
}

io.on('connection', function (socket) {

    socket.on('xotaker', function () {
        if (exanak != "dzmer") {
            var random = Math.floor(Math.random() * grassArr.length);

            var Y = grassArr[random].y;
            var X = grassArr[random].x;
            var r = (Math.round(Math.random()) / 2);

            matrix[grassArr[random].y][grassArr[random].x] = 0;
            grassArr.splice(random, 1);


            var newXotaker = new Xotaker(X, Y, r);
            xotakerArr.push(newXotaker);
            xotakerArrtiv.push(newXotaker);
        }
    })

    socket.on('gish', function () {
        var random = Math.floor(Math.random() * grassArr.length);

        var Y = grassArr[random].y;
        var X = grassArr[random].x;
        var r = (Math.round(Math.random()) / 2);

        matrix[grassArr[random].y][grassArr[random].x] = 0;
        grassArr.splice(random, 1);


        var newGishatich = new Gishatich(X, Y, r);
        gishatichArr.push(newGishatich);
        gishatichArrtiv.push(newGishatich);

    })
    socket.on('kerps', function () {
        var random = Math.floor(Math.random() * grassArr.length);

        var Y = grassArr[random].y;
        var X = grassArr[random].x;

        matrix[grassArr[random].y][grassArr[random].x] = 0;
        grassArr.splice(random, 1);


        var newkerpars = new KerparS(X, Y);
        kerparsArr.push(newkerpars);
        kerparsArrtiv.push(newkerpars);
    })
    socket.on('amenaker', function () {
        var random = Math.floor(Math.random() * grassArr.length);

        var Y = grassArr[random].y;
        var X = grassArr[random].x;
        var r = (Math.round(Math.random()) / 2);

        matrix[grassArr[random].y][grassArr[random].x] = 0;
        grassArr.splice(random, 1);


        var newamenaker = new Amenaker(X, Y, r);
        amenakerArr.push(newamenaker);
        amenakerArrtiv.push(newamenaker);

    })

});


// console.log("asecc");


var intervalId = setInterval(function () { drawS() }, 1000);
function drawS() {
    function exanak_f() {
        timeEx++;
        if (exanak == "garun" && timeEx > 8) {
            exanak = "amar";
        }
        else if (exanak == "amar" && timeEx > 16) {

            for (var a = 0; a <= superkArr.length + 1; a++) {
                for (var i in superkArr) {
                    matrix[superkArr[i].y][superkArr[i].x] = 0;
                    superkArr.splice(i, 1);
                }
            }
            exanak = "ashun";
        }
        else if (exanak == "ashun" && timeEx > 24) {
            exanak = "dzmer";
        }
        else if (exanak == "dzmer" && timeEx > 32) {
            exanak = "garun";
            for (var i = 0; i <= 5; i++) {
                var random = Math.floor(Math.random() * grassArr.length);

                var Y = grassArr[random].y;
                var X = grassArr[random].x;

                matrix[grassArr[random].y][grassArr[random].x] = 0;
                grassArr.splice(random, 1);

                var superkerpar = new SuperK(X, Y);
                superkArr.push(superkerpar);
                superkArrtiv.push(superkerpar);
            }
            timeEx = 0;
        }
        return exanak;

    }
    var exanak_e = exanak_f();



    for (var i in grassArr) {
            if (exanak == "garun") {
        grassArr[i].bazmanalg();
            }
            else if (exanak == "dzmer") {
        grassArr[i].bazmanaldz();
            } else {
        grassArr[i].bazmanal();
            }
        //grassArr[i].bazmanal();
    }
    for (var i in superkArr) {
        if (exanak == "garun") {      
            superkArr[i].utelgarun();
        } else if (exanak == "amar") {
            superkArr[i].utelamar();

        } else {
            superkArr[i].mahanal();
        }
    }
    for (var i in xotakerArr) {
        //    xotakerArr[i].bazmanal();
        //     xotakerArr[i].utel();
        //      xotakerArr[i].mahanal();
        if (exanak == "garun") {
            xotakerArr[i].bazmanal_2();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }
        else if (exanak == "dzmer") {
            xotakerArr[i].anhetanal();
        }
        else {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }

    }

    for (var i in gishatichArr) {
        // gishatichArr[i].utel_2();
        // gishatichArr[i].bazmanal();
        // gishatichArr[i].mahanal();
        if (exanak == "garun") {
            gishatichArr[i].utel_2();
            gishatichArr[i].bazmanal(); 
            gishatichArr[i].mahanal();
        }
        else {
            gishatichArr[i].utel();
            gishatichArr[i].bazmanal();
            gishatichArr[i].mahanal();
        }
        
        
    }

    for (var i in amenakerArr) {
        amenakerArr[i].sharjvel();
        amenakerArr[i].utel();
        amenakerArr[i].bazmanal();
        if (exanak == "amar") {
            if (timeEx == 9) {
            amenakerArr[i].mahanalamar();
            }
        }
        else {
            amenakerArr[i].mahanal();
        }


     }
    for (var i in kerparsArr) {
        if (exanak == "dzmer") {
            kerparsArr[i].bazmanaldzmer();
        }
        else {
            kerparsArr[i].bazmanal();
        }
        kerparsArr[i].sharjvel();

    }
    if (grassArr.length == 0) {
        io.sockets.emit('verj');
        clearInterval(intervalId);
    }

    if (grassArr.length != 0) {
        io.sockets.emit('matrix', matrix, exanak);
    }

    function file() {
        var obj = {
            "xoti qanak": grassArrtiv.length,
            "xotakeri qanak": xotakerArrtiv.length,
            "gishatichi qanak": gishatichArrtiv.length,
            "kerpstexcoxi qanak": kerparsArrtiv.length,
            "amenakeri qanak": amenakerArrtiv.length
        };
        var myJSON = JSON.stringify(obj);
        var file = "file.json";
        fs.writeFileSync(file, myJSON);
    }
    file();
}