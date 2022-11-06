import React,{useState} from "react";


export function getPosition(details){

    let origin = undefined;
    let destination = undefined;

    if(details== null) return;
    if(details.originDetails != null){
        origin = details.originDetails;
    }
    
    if(details.destinationDetails != null){
        destination = details.destinationDetails;
    }  

    return ({originDetails:origin,
            destinationDetails:destination})
}
