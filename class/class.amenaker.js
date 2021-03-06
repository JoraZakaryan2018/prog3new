var LivingCreature = require("./class.parent.js");

module.exports = class Amenaker extends LivingCreature {
    constructor(x, y, ser,mahxot) {
        super(x, y);
        this.mahxot = 0;
        this.ser = (ser == 0 ? "txa" : "axjik");
        //console.log("amenaker : " + ser);
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
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak2 = this.randy(this.yntrelVandak(0));
        var norVandak1 = this.randy(this.yntrelVandak(1));
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;
        } else if (norVandak1) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var norVandak2_axjik = this.randy(this.yntrelVandak(3.5));        
        var norVandak2 = this.randy(this.yntrelVandak(3));
        var norVandak1_axjik = this.randy(this.yntrelVandak(2.5));
        var norVandak1 = this.randy(this.yntrelVandak(2));
        var norVandak3 = this.randy(this.yntrelVandak(1));
        var norVandak5 = this.randy(this.yntrelVandak(5));

        if (norVandak5) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak5[1];
            this.x = norVandak5[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in kerparsArr) {
                if (norVandak5[1] == kerparsArr[i].y && norVandak5[0] == kerparsArr[i].x) {
                    kerparsArr.splice(i, 1);
                }
            }
            this.mahxot++;
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in gishatichArr) {
                if (norVandak2[1] == gishatichArr[i].y && norVandak2[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }
            }
            this.mahxot++;
            
        }
        else if (norVandak2_axjik) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2_axjik[1];
            this.x = norVandak2_axjik[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in gishatichArr) {
                if (norVandak2_axjik[1] == gishatichArr[i].y && norVandak2_axjik[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }
            }
            this.mahxot++;
            
        }
        else if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in xotakerArr) {
                if (norVandak1[1] == xotakerArr[i].y && norVandak1[0] == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                }
                this.mahxot++;
                
            }
        }
        else if (norVandak1_axjik) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1_axjik[1];
            this.x = norVandak1_axjik[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in xotakerArr) {
                if (norVandak1_axjik[1] == xotakerArr[i].y && norVandak1_axjik[0] == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                }
            }
            this.mahxot++;
            
        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = this.ser == "axjik" ? 4.5 : 4;

            for (var i in grassArr) {
                if (norVandak3[1] == grassArr[i].y && norVandak3[0] == grassArr[i].x) {
                    grassArr.splice(i, 1);
                  
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        this.stanalNorKordinatner();
    
        if (this.ser == "txa") {
            var norvandak = this.randy(this.yntrelVandak(4.5));
            if (norvandak) {
                var norVandak1 = this.randy(this.yntrelVandak(1));

                if (norVandak1 && this.mahxot >=5) {
                    var r = (Math.round(Math.random()) / 2);

                    var noram = new Amenaker(norVandak1[0], norVandak1[1], r);
                    amenakerArr.push(noram);
                    amenakerArrtiv.push(noram);
                    matrix[norVandak1[1]][norVandak1[0]] = r + 4;

                    for (var i in grassArr) {
                        if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x) {
                            grassArr.splice(i, 1);
                        }
                    }
                   // console.log("bazmacav amenaker");
                    this.mahxot =0;
                }
            }
        }
    }
    mahanal() {
        if (xotakerArr.length == 0 && gishatichArr.length == 0 && kerparsArr == 0 && superkArr == 0) {
            for (var i in amenakerArr) {
                matrix[amenakerArr[i].y][amenakerArr[i].x] = 0;
                amenakerArr.splice(i, 1);
            }
        }
    }
    mahanalamar() {
        var rand = Math.floor(Math.random() * amenakerArr.length);

        matrix[amenakerArr[rand].y][amenakerArr[rand].x] = 0;
        amenakerArr.splice(rand, 1);
    }
}

