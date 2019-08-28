// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg; 
    this.strength = strengthArg;
  }
  attack() {
      return this.strength
  }
  receiveDamage(damage){
      this.health -= damage
  }
}


// Viking
class Viking extends Soldier {
    constructor(nameArg,healthArg, strengthArg){
    super(healthArg, strengthArg)
    this.name = nameArg; 
    }
    receiveDamage(damage){
        this.health -= damage;
        let died = `${this.name} has died in act of combat`;
        let alive = `${this.name} has received ${damage} points of damage`;
       if(this.health > 0){
           return alive
       }else{return died}
    }
    battleCry(){
        let cry = "Odin Owns You All!"
        return cry
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg)
      }
      receiveDamage(damage){
        this.health -= damage;
        let died = `A Saxon has died in combat`;
        let alive = `A Saxon has received ${damage} points of damage`;
       if(this.health > 0){
           return alive
       }else{
           return died
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(v){
        this.vikingArmy.push(v)
    }
    addSaxon(s){
        this.saxonArmy.push(s)
    }
    vikingAttack(){
        let sax = Math.floor(Math.random() * this.saxonArmy.length)
        let vik = Math.floor(Math.random() * this.vikingArmy.length)
        let move = this.saxonArmy[sax].receiveDamage(this.vikingArmy[vik].strength)
        if(this.saxonArmy[sax].health <= 0){
            this.saxonArmy.splice(sax,1)
        
        }
        return move
        }
    saxonAttack(){
        let sax = Math.floor(Math.random() * this.saxonArmy.length)
        let vik = Math.floor(Math.random() * this.vikingArmy.length)
        let move = this.vikingArmy[vik].receiveDamage(this.saxonArmy[sax].strength)
        if(this.vikingArmy[vik].health <= 0){
            this.vikingArmy.splice(vik,1)
        
        }
        return move
    }
    showStatus(){
        if(this.saxonArmy.length <= 0){
        return "Vikings have won the war of the century!"
        }
         if(this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survive another day..."
            }
            if(this.saxonArmy.length >= 1 && this.vikingArmy.length >=1){
                return "Vikings and Saxons are still in the thick of battle."
            }
        
    }
}
