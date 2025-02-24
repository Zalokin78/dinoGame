//import Phaser from "phaser";

import { Player } from "../entities/Player";
import { SpriteWithDynamicBody } from "../types";

class PlayScene extends Phaser.Scene {
  player: Player;
  startTrigger: SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }
  constructor() {
    super("PlayScene");
  }

  create() {
    this.createEnvironment();
    this.createPlayer();

    this.startTrigger = this.physics.add
      .sprite(0, 10, null)
      .setOrigin(0, 1)
      .setAlpha(0);

    this.physics.add.overlap(this.startTrigger, this.player, () => {
      console.log("COLLISION!!");
    });
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight);
  }

  createEnvironment() {
    this.add
      .tileSprite(0, this.gameHeight as number, 88, 26, "ground")
      .setOrigin(0, 1);
  }
}

export default PlayScene;
