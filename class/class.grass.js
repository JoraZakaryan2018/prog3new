var LivingCreature = require("./class.parent.js");

module.exports = class Grass extends LivingCreature {
    constructor(x, y,multiply) {
        super(x, y);
        this.multiply = 0;
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
    bazmanal() {
       // console.log("rd");
       
         this.stanalNorKordinatner();
         this.multiply++;
         var norVandak = this.randy(this.yntrelVandak(0));
         if (norVandak && this.multiply >= 3) {
             var norXot = new Grass(norVandak[0], norVandak[1]);
             grassArr.push(norXot);
              grassArrtiv.push(norXot);
             matrix[norVandak[1]][norVandak[0]] = 1;
             this.multiply = 0;
         }
     }
     bazmanalg(){
        this.stanalNorKordinatner();
        this.multiply++;
        var norVandak = this.randy(this.yntrelVandak(0));
        if (norVandak && this.multiply >= 1) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
             grassArrtiv.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
     }
     bazmanaldz(){
        this.stanalNorKordinatner();
        this.multiply++;
        var norVandak = this.randy(this.yntrelVandak(0));
        if (norVandak && this.multiply >= 5) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
             grassArrtiv.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
     }

}


