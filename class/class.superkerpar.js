var LivingCreature = require("./class.parent.js");

module.exports = class SuperK extends LivingCreature {
    constructor(x, y) {
        super(x, y);
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 3],
            [this.x + 4, this.y - 4],
            [this.x + 5, this.y - 5],
            [this.x + 6, this.y - 6],
            [this.x + 7, this.y - 7],
            [this.x + 8, this.y - 8],
            [this.x + 9, this.y - 9],
            [this.x + 10, this.y - 10],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 4, this.y + 4],
            [this.x - 5, this.y + 5],
            [this.x - 6, this.y + 6],
            [this.x - 7, this.y + 7],
            [this.x - 8, this.y + 8],
            [this.x - 9, this.y + 9],
            [this.x - 10, this.y + 10],
            [this.x - 1, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 4, this.y - 4],
            [this.x - 5, this.y - 5],
            [this.x - 6, this.y - 6],
            [this.x - 7, this.y - 7],
            [this.x - 8, this.y - 8],
            [this.x - 9, this.y - 9],
            [this.x - 10, this.y - 10],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y + 5],
            [this.x + 6, this.y + 6],
            [this.x + 7, this.y + 7],
            [this.x + 8, this.y + 8],
            [this.x + 9, this.y + 9],
            [this.x + 10, this.y + 10]
        ];
    }
    yntrelVandak(ch) {

        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    // cnvel(){
    //     for(var i =0;i<=5;i++){
    //         var random = Math.floor(Math.random() * grassArr.length);
        
    //             var Y = grassArr[random].y;
    //             var X = grassArr[random].x;
        
    //             matrix[grassArr[random].y][grassArr[random].x] = 0;
    //             grassArr.splice(random, 1);
    
    //             var superkerpar = new SuperK(Y, X);
    //             superkArr.push(superkerpar);
    //             superkArrtiv.push(superkerpar);
    //     }   
    // }
    utelgarun() {
        this.stanalNorKordinatner();
        var norVandak3 = this.randy(this.yntrelVandak(2));
        var norVandak1 = this.randy(this.yntrelVandak(4));
        var norVandak2 = this.randy(this.yntrelVandak(3));


        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 6;

            for (var i in amenakerArr) {
                if (norVandak1[1] == amenakerArr[i].y && norVandak1[0] == amenakerArr[i].x) {
                    amenakerArr.splice(i, 1);
                }
            }
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 6;

            for (var i in gishatichArr) {
                if (norVandak2[1] == gishatichArr[i].y && norVandak2[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }
            }
        }

        else if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 6;

            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x)
                xotakerArr.splice(i, 1);
            }
        }
    }
    utelamar(){
        this.stanalNorKordinatner();
        var norVandak3 = this.randy(this.yntrelVandak(5));
        var norVandak1 = this.randy(this.yntrelVandak(4));
        var norVandak2 = this.randy(this.yntrelVandak(3));


        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 6;

            for (var i in amenakerArr) {
                if (norVandak1[1] == amenakerArr[i].y && norVandak1[0] == amenakerArr[i].x) {
                    amenakerArr.splice(i, 1);
                }
            }
        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 6;

            for (var i in kerparsArr) {
                if (norVandak3[1] == kerparsArr[i].y && norVandak3[0] == kerparsArr[i].x)
                kerparsArr.splice(i, 1);
            }
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 6;

            for (var i in gishatichArr) {
                if (norVandak2[1] == gishatichArr[i].y && norVandak2[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
    // mahanal(){
    //     for(var i in superkArr){
    //         matrix[this.y][this.x] = 0;
    //         superkArr.splice(i,1);
    //     }
    // }
}