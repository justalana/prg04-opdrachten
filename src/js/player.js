import { Actor, Engine, Vector, Keys } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'

export class Player extends Actor {
    constructor() {
        super({width: 100, height: 100 })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(400, 400);
        this.vel = new Vector(0, 0);

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    
    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
    
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
          yspeed = -100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
          yspeed = 100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = 100
        }
    
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -100
        }
    
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)
    
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            console.log("shoot!")
        }
    }

    hitSomething(event) {
        if(event.other instanceof Fish) {
             console.log("the devil hits the fish")
             this.kill()           // remove the car
             event.other.kill()    // remove the tree
        }
    }
  }