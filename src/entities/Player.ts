export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "dino-idle");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update);
  }
  init() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    // this.setOrigin();
    // this.setCollideWorldBounds();

    this.setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);

    //this.registerPlayerControl();
  }

  update(...args: any[]): void {
    const { space } = this.cursors;
    console.log(space);
  }
  /* registerPlayerControl() {
    const spaceBar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    spaceBar.on("down", () => {
      this.setVelocityY(-1600);
    });
  } */
}
