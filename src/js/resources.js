import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Eyes: new ImageSource('images/googly-a.png'),
    Background: new ImageSource('images/background.jpg'),
    Player: new ImageSource('images/player.png')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Eyes,
    Resources.Background,
    Resources.Player
])

export { Resources, ResourceLoader }