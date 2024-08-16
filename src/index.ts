import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: {
    preload: preload,
    create: create,
  },
};

new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
}

function create() {
  this.add.image(400, 300, "sky");
}
//   console.log("test");

//   class A {
//     // constructor(name: string) {
//     //   this.name = name;
//     // }
//     none() {
//       console.log("Inside Parent class");
//     }

//     another() {
//       console.log("another method");
//     }
//   }

//   class B extends A {
//     none() {
//       console.log("Inside child class");
//     }

//     sampleM() {
//       super.none();
//     }
//   }

//   let b = new B();

//   b.sampleM();
//   //console.log(b.name);
// }

/* class A {
  constructor() {
    console.log("Inside Parent class constructor");
  }
}

class B extends A {
  constructor() {
    super();
    console.log("Inside Child class constructor");
  }
}

let bc = new B(); */

class Animal {
  typeOfAnimal: string;
  habitat: string;
  constructor(typeOfAnimal: string, habitat: string) {
    this.typeOfAnimal = typeOfAnimal;
    this.habitat = this.habitat;
  }
  animalType() {
    console.log("Type of animal is: " + this.typeOfAnimal);
  }
}

class Butterfly extends Animal {
  color: string;
  habitatz: string;

  constructor(typeOfAnimals: string, habitatz: string, color: string) {
    super(typeOfAnimals, habitatz);
    this.color = color;
    this.habitatz = habitatz;
  }
  butterFlyColor() {
    console.log("Color of butterfly is: " + this.color);
    console.log("Type of habitat is: " + this.habitatz);
  }
}

let bf = new Butterfly("insect", "air", "yellow");

bf.butterFlyColor();
bf.animalType();
