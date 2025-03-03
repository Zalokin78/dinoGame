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

type TestObj = { name: string; age: number };

/* type TouchControls = {
  up:string
} */

export class Player extends Phaser.Physics.Arcade.Sprite {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  testObj: TestObj;

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
    //console.log(this.cursors);
    // this.setOrigin();
    // this.setCollideWorldBounds();

    this.setOrigin(0, 1)
      .setGravityY(5000)
      .setCollideWorldBounds(true)
      .setBodySize(44, 92);

    this.registerAnimations();

    //this.registerPlayerControl();
  }

  update() {
    //this.testObj = { name: "Harry", age: 20 };
    const { name } = this.testObj;
    //console.log(name);
    //debugger;
    const { space } = this.cursors;

    //console.log(space);
    //console.log(space.isDown);

    const isSpaceJustDown = Phaser.Input.Keyboard.JustDown(space);

    const onFloor = (this.body as Phaser.Physics.Arcade.Body).onFloor();
    //console.log(onFloor);

    //console.log(this.cursors);
    //console.log(isSpaceJustDown);

    //const { up } = "UP";

    if (isSpaceJustDown && onFloor) {
      this.setVelocityY(-1600);
    }
  }

  playRunAnimation() {
    this.play("dino-run", true);
  }

  registerAnimations() {
    this.anims.create({
      key: "dino-run",
      frames: this.anims.generateFrameNames("dino-run"),
      frameRate: 10,
      repeat: -1,
    });
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
