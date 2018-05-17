var LivingCreature = require("./class.parent.js");

module.exports=class Gishatich extends LivingCreature {
    constructor(x, y, energy,ser) {
        super(x, y);
        this.energy = 5;
        this.ser = (ser == 0 ? "txa" : "axjik");
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
        var norVandak3 = this.randy(this.yntrelVandak(1));

        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 3;
            this.energy--;




        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;


        }
    }

    bazmanal() {
        this.stanalNorKordinatner();
        if (this.ser = "txa") {
            var norvandak = this.randy(this.yntrelVandak(3.5));
            if (norvandak) {
                var norVandak1 = this.randy(this.yntrelVandak(0));
                if (norVandak1) {
                    var norGishatich = new Gishatich(norVandak1[0], norVandak1[1]);
                    gishatichArr.push(norGishatich);
                      gishatichArrtiv.push(norGishatich);
                    matrix[norVandak1[1]][norVandak1[0]] = 3; 
                }
            }
        }
    }
    utel_2(){
        this.stanalNorKordinatner();
        var norVandak3 = this.randy(this.yntrelVandak(2));
        var norVandak1 = this.randy(this.yntrelVandak(1));
        
        if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;

            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x) {
                    this.energy = 5;
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else if(norVandak1){
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var norVandak3 = this.randy(this.yntrelVandak(2));

        if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;

            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x) {
                    this.energy = 5;
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        for (var i in gishatichArr) {
            if (gishatichArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
            }
        }
    }
}
