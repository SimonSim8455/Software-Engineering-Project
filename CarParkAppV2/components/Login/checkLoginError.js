export default function CheckError(credName, cred){
    if(credName == "email"){
        return [true,'Email existed']
    }
    
    if(credName == 'password'){
        if(cred.length <3)
            return [false,'Too Short']

        return [true,'']
    }

}