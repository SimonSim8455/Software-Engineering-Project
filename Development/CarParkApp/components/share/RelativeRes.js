import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function rel(Direction, pixel){
    let h = (windowHeight * pixel) /800;
    let w = (windowWidth * pixel) / 360;
    
    if(Direction === "H" || Direction === "h") return h;
    else return w;
}

