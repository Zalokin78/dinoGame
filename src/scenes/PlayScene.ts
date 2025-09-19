//import Phaser from "phaser";

import { PRELOAD_CONFIG } from "..";
import { Player } from "../entities/Player";
import { SpriteWithDynamicBody } from "../types";
import { GameScene } from "./GameScene";
declare module DinoGame {}

type Person = string;

class PlayScene extends GameScene {
  player: Player;
  ground: Phaser.GameObjects.TileSprite;
  obstacles: Phaser.Physics.Arcade.Group;
  startTrigger: SpriteWithDynamicBody;
  // isGameRunning: boolean = false;
  //start of typescript testing
  person: Person;
  age: number;
  spawnInterval: number = 1500;
  spawnTime: number = 0;
  gameSpeed: number = 5;

  //end of typescript testing

  // get gameHeight() {
  //   return this.game.config.height as number;
  // }

  // get gameWidth() {
  //   return this.game.config.width as number;
  // }
  constructor() {
    super("PlayScene");
  }

  create() {
    //start of typescript testing
    /* this.person = "Harry";
    this.age = 10; */
    //end of typescript testing
    this.createEnvironment();
    this.createPlayer();

    this.obstacles = this.physics.add.group();

    this.startTrigger = this.physics.add
      .sprite(0, 10, null)
      .setOrigin(0, 1)
      .setAlpha(0);

    this.physics.add.collider(this.obstacles, this.player, () => {
      this.physics.pause();
      this.isGameRunning = false;
    });

    this.physics.add.overlap(this.startTrigger, this.player, () => {
      if (this.startTrigger.y === 10) {
        this.startTrigger.body.reset(0, this.gameHeight);
        // console.log("Triggering upper Trigger!");
        return;
      }
      this.startTrigger.body.reset(9999, 9999);

      const rollOutEvent = this.time.addEvent({
        delay: 1000 / 60,
        loop: true,
        callback: () => {
          console.log("rolling");
          this.player.playRunAnimation();
          this.player.setVelocityX(80);
          this.ground.width += 17 * 2;
          if (this.ground.width >= this.gameWidth) {
            rollOutEvent.remove();
            this.ground.width = this.gameWidth;
            this.player.setVelocityX(0);
            this.isGameRunning = true;
            //console.log("stop");
          }
        },
      });
    });
  }

  update(time: number, delta: number): void {
    if (!this.isGameRunning) {
      return;
    }

    this.spawnTime += delta;

    if (this.spawnTime >= this.spawnInterval) {
      this.spawnObstacle();
      this.spawnTime = 0;
    }

    Phaser.Actions.IncX(this.obstacles.getChildren(), -this.gameSpeed);

    this.ground.tilePositionX += this.gameSpeed;

    this.obstacles.getChildren().forEach((obstacle: SpriteWithDynamicBody) => {
      if (obstacle.getBounds().right < 0) {
        this.obstacles.remove(obstacle);
      }
    });
    /* console.log("T: " + time);
    console.log("spawnTime: " + this.spawnTime);
    console.log("D: " + delta);
    console.log("Fps: " + 1000 / delta); */
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight);
  }

  createEnvironment() {
    this.ground = this.add
      .tileSprite(0, this.gameHeight as number, 88, 26, "ground")
      .setOrigin(0, 1);
  }

  spawnObstacle() {
    const obstacleNum =
      Math.floor(Math.random() * PRELOAD_CONFIG.cactusesCount) + 1;
    const distance = Phaser.Math.Between(600, 900);

    this.obstacles
      .create(distance, this.gameHeight, `obstacle-${obstacleNum}`)
      .setOrigin(0, 1)
      .setImmovable();

    //this.obstactles.create(distance, this.game);
  }
}

export default PlayScene;
