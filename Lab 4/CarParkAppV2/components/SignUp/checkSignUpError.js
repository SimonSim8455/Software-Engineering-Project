
export default function CheckError(credName, cred){
    if(credName == "email"){
        return [true,'Email existed']
    }
    
    if(credName == 'firstName'){
        return [true,'Email existed']
    }

    if(credName == 'lastName'){
        return [true,'Email existed']
    }
    
    if(credName == 'password'){
        return [true,'Email existed']
    }

    if(credName == 'comfirmPassword'){
        if(cred[0] == cred[1]){
            return [true,'Email existed']
        }
        else{
            return [false,"Password not the same"]
        }
    }
}