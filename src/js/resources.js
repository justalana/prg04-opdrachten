import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Eyes: new ImageSource('images/googly-a.png'),
    Player: new ImageSource('images/player.png'),
    Coin: new ImageSource('images/coin.png')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Eyes,
    Resources.Player,
    Resources.Coin
])

export { Resources, ResourceLoader }