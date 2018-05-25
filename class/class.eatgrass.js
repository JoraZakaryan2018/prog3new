var LivingCreature = require("./class.parent.js");

module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, ser,energy,mahxot) {
        super(x, y);
        this.energy = 5;
        this.mahxot = 0;
        this.ser = (ser == 0 ? "txa" : "axjik");
        //console.log("eatgrass: " + ser);
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() {

        var norVandak2 = this.randy(this.yntrelVandak(0));
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 2.5 : 2;
            this.energy--;
            this.mahxot = 0;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak1 = this.randy(this.yntrelVandak(1));

        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 2.5 : 2;

            for (var i in grassArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x)
                    grassArr.splice(i, 1);
            }
            this.energy = 5;
            this.mahxot++;
        }

        else {
            this.sharjvel();
        }
    }
    anhetanal() {
        matrix[this.y][this.x] = this.ser == "axjik" ? 2.5 : 2;
    }
    bazmanal() {
        this.stanalNorKordinatner();
        //console.log(this.ser);
        //   console.log(grassArr.length);

        if (this.ser == "txa") {

            var norvandak = this.randy(this.yntrelVandak(2.5));
            // console.log("aaaa");
            // console.log(norvandak);
            if (norvandak && this.mahxot >=3) {
                var norVandak1 = this.randy(this.yntrelVandak(1));
                // console.log(norVandak1);

                if (norVandak1) {
                    var r = (Math.round(Math.random()) / 2);

                    var norXotaker1 = new Xotaker(norVandak1[0], norVandak1[1], r);
                    xotakerArr.push(norXotaker1);
                    xotakerArrtiv.push(norXotaker1);
                    matrix[norVandak1[1]][norVandak1[0]] = r + 2;

                   
                    for (var i in grassArr) {
                        if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x) {
                            grassArr.splice(i, 1);
                        }
                    }
                    this.mahxot =0;
                }
            }
        }
    }
    bazmanal_2() {
        this.stanalNorKordinatner();

        var norVandak1 = this.randy(this.yntrelVandak(1));
      

        if (norVandak1 && this.mahxot >= 2) { 
             var r = (Math.round(Math.random()) / 2);
            var norXotaker1 = new Xotaker(norVandak1[0], norVandak1[1],r);
            xotakerArr.push(norXotaker1);
            xotakerArrtiv.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = r+2;
            
            for (var i in grassArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x) {
                    grassArr.splice(i, 1);
                }
            }
            this.mahxot = 0;
        }
    }
    mahanal() {

        for (var i in xotakerArr) {
            if (xotakerArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);
               
            }
        }
    }
}