export default function rel(Direction, pixel){
    let ans=0;
    if(Direction == ("H") || Direction == ('h')){
        ans = pixel/800 *100;
        return `${ans}%`;
    }
    else{
        ans = pixel/360 *100;
        return `${ans}%`;
    }
}