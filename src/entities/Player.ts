/* declare namespace Controls {
  type Keys = {
    cursors: Arrows.Button;
  };
}

declare namespace Arrows {
  type Button = {
    up: string
  }
} */

//type TouchControls = Controls.Keys;

/* type TouchControls = {
  up:string
} */

export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  //controls: TouchControls;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "dino-idle");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
    //this.controls = {up:};

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
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

  update() {
    const { space } = this.cursors;
    const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

    const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();
    console.log(onFloor);

    //console.log(this.cursors);
    console.log(isSpaceJustDown);

    //const { up } = "UP";

    if (isSpaceJustDown && onFloor) {
      this.setVelocity(-1600);
    }
  }

  /* update(...args: any[]): void {
    const { space } = this.cursors;
    console.log(space);
  } */
  /* registerPlayerControl() {
    const spaceBar = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    spaceBar.on("down", () => {
      this.setVelocityY(-1600);
    });
  } */
  /* registerPlayerControl() {
      const spaceBar = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.SPACE
      );
      spaceBar.on("down", () => {
        this.player.setVelocityY(-1600);
      });
    } */
}
