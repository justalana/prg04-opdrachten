import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Eyes: new ImageSource('images/googly-a.png'),
    Background: new ImageSource('images/background.jpg')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Eyes,
    Resources.Background
])

export { Resources, ResourceLoader }