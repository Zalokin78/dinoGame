//import Phaser from "phaser";

import { Player } from "../entities/Player";
import { SpriteWithDynamicBody } from "../types";

/* declare module DinoGame {
  namespace Group {
    type People = {
      name: string;
      age: number;
    };
    namespace Matter {
      type Whatever = {
        a: string;
        b: number;
      };
    }
  }
} */

/* type Whatever = DinoGame.Group.Matter.Whatever;

type Person = {
  name: string;
  age: number;
  welcomePerson: (welcome: string) => string;
}; */

class PlayScene extends Phaser.Scene {
  playerz: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  /* whatever: Whatever;
  person: Person; */
  //player: Player;
  player: Player;
  startTrigger: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;

    /* let n: any = 5;
    let s: string = "5";

    n = 4 as number; */
  }
  constructor() {
    super("PlayScene");
  }

  create() {
    /* this.whatever = {
      a: "Nicholas",
      b: 46,
    };
    this.person = {
      name: "Filip",
      age: 46,
      welcomePerson(w: string) {
        console.log("HELLO");
        return "HELLO";
      },
    }; */
    //this.registerPlayerControl();
    this.createEnvironment();
    this.createPlayer();

    this.startTrigger = this.physics.add
      .sprite(0, 10, null)
      .setOrigin(0, 1)
      .setAlpha(0);

    //this.registerPlayerControl();

    this.physics.add.overlap(this.startTrigger, this.player, () => {
      console.log("COLLISION!!");
    });
  }

  createPlayer() {
    /* this.player = this.physics.add
      .sprite(0, this.gameHeight, "dino-idle")
      .setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92); */

    this.player = new Player(this, 0, this.gameHeight);
  }

  //this.player = new Player(this, 0, this.gameHeight);

  createEnvironment() {
    this.add
      .tileSprite(0, this.gameHeight as number, 88, 26, "ground")
      .setOrigin(0, 1);
    //debugger;
  }
  update() {}
}

export default PlayScene;
