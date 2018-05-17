var socket = io.connect('http://localhost:3000');
var side = 10;

function keyPressed() {
  
        if (keyCode === UP_ARROW) {
            socket.emit('xotaker');
        }
    if (keyCode === LEFT_ARROW) {
        socket.emit('gish');
    }
    if (keyCode === RIGHT_ARROW) {
        socket.emit('kerps');
    }
    if (keyCode === DOWN_ARROW) {
        socket.emit('amenaker');
    }
}
socket.on('matrix', function (matrix, exanak) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                if (exanak == "garun") {
                    fill("DarkGreen");
                }
                if (exanak == "amar") {
                    fill("DarkOliveGreen");
                }
                if (exanak == "ashun") {
                    fill("Chartreuse ");
                }
                if (exanak == "dzmer") {
                    fill("White");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("SaddleBrown");
                rect(x * side, y * side, side, side);
            }

        }
    }
});
socket.on('verj', function () {
    remove();
    var a = document.createElement("IMG");
    a.setAttribute("src", "verj.png");
    a.setAttribute("width", "754");
    a.setAttribute("height", "404");
    document.body.appendChild(a);
})
function setup() {
    createCanvas(400, 400);
    background('#acacac');
}


