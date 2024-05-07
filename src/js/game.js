import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const bg = new Actor()
        bg.graphics.use(Resources.Background.toSprite())
        this.add(bg)

        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)

        const eyes = new Actor()
        eyes.graphics.use(Resources.Eyes.toSprite())
        eyes.pos = new Vector(200, 200)
        eyes.vel = new Vector(-10,0)
        this.add(eyes)

    }
}

new Game()