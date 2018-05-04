var socket = io.connect('http://localhost:3000');
var side = 10;

socket.on('matrix', function (matrix) {
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
            else if (matrix[y][x] == 6) {
                var hiv = new Hivand(x, y);
                hivandArr.push(hiv);
            }

        }
    }
});
function setup() {
    frameRate(5);
    createCanvas(400, 400);
    background('#acacac');
}


