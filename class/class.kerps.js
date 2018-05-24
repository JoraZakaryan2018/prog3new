var LivingCreature = require("./class.parent.js");

module.exports=class KerparS extends LivingCreature {
    constructor(x, y, energy) {
        super(x, y);
        this.multiply = 0;
        this.energy = energy;
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
        
        this.multiply++;
        this.energy++;
        var norVandak2 = this.randy(this.yntrelVandak(0));
        var norVandak3 = this.randy(this.yntrelVandak(1));

        if (norVandak2 || norVandak3) {
            if (norVandak2) {
                matrix[this.y][this.x] = 0;
                this.y = norVandak2[1];
                this.x = norVandak2[0];
                matrix[this.y][this.x] = 5;
            }
            if (norVandak3) {
                matrix[this.y][this.x] = 1;
                this.y = norVandak3[1];
                this.x = norVandak3[0];
                matrix[this.y][this.x] = 5;
            }
        }
    }
    bazmanal() {
        this.stanalNorKordinatner();

        var norVandak1 = this.randy(this.yntrelVandak(0));
        var norVandak2 = this.randy(this.yntrelVandak(1));
        

        if (norVandak1) {
            var norXotaker1 = new Grass(norVandak1[0], norVandak1[1]);
            grassArr.push(norXotaker1);
            grassArrtiv.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = 1;

        }

        if (norVandak2) {
            var norXotaker1 = new Xotaker(norVandak2[0], norVandak2[1]);
            xotakerArr.push(norXotaker1);
            xotakerArrtiv.push(norXotaker1);
            matrix[norVandak2[1]][norVandak2[0]] =  (Math.round(Math.random()) / 2) + 2; 

             if (this.multiply >= 5) {
                var norXotaker1 = new Gishatich(norVandak2[0], norVandak2[1]);

                gishatichArr.push(norXotaker1);
                gishatichArrtiv.push(norXotaker1);
                matrix[norVandak2[1]][norVandak2[0]] = (Math.round(Math.random()) / 2) + 3;
                this.multiply = 0;
              //   matrix[norVandak2[1]][norVandak2[0]] = (Math.round(Math.random()) / 2) + 3; 
            }
        }
    }
    bazmanaldzmer() {
        this.stanalNorKordinatner();

        var norVandak1 = this.randy(this.yntrelVandak(0));
        var norVandak2 = this.randy(this.yntrelVandak(1));
        
        if (norVandak1) {
            var norXotaker1 = new Grass(norVandak1[0], norVandak1[1]);
            grassArr.push(norXotaker1);
            grassArrtiv.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = 1;
        }
        if (norVandak2) {
             if (this.multiply >= 5) {
                var norXotaker1 = new Gishatich(norVandak2[0], norVandak2[1]);

                gishatichArr.push(norXotaker1);
                gishatichArrtiv.push(norXotaker1);
                matrix[norVandak2[1]][norVandak2[0]] = (Math.round(Math.random()) / 2) + 3; 
                this.multiply = 0;
             
            }
        }
    }
   

}


