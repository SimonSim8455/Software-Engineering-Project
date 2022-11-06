function testNum(str) {
    for(let y=0;y<str.length;y++){
        if(str[y]>='0' && str[y]<= '9'){
            return true;
        }
    }
    return false;
}

function passW(str) {
    for(let y=0;y<str.length;y++){
        let a = str[y];
        if(a == '.' || a == '_' || a== '-'){
            return true;
        }
    }
    return false;
}
export default function CheckError(credName, cred){
    let err= ""
    let pass = false;
    if(credName == "email"){
        if(cred == ""){
            err = "Empty email! Please input email."   
        }
        else if (!cred.includes('@')){
            err = "Invalid email."
        }
        else{
            pass = true;
        }
        return [pass,err]
    }
    
    if(credName == 'firstName'){
        if(cred == ""){
            err = "Empty First Name ! Please input First Name."   
        }
        else{
            var test = /^[a-z0-9.@A-Z]*$/.test(cred)
            if(test == false){
                err= "Invalid First Name, Please ensure input only have alphabtes and number"
            }
            else{
                pass = true;
            }
        }
        return [pass,err]
    }

    if(credName == 'lastName'){
        if(cred == ""){
            err = "Empty Last Name ! Please input Last Name."   
        }
        else{
            var test = /^[a-z0-9.@A-Z]*$/.test(cred)
            if(test == false){
                err= "Invalid Last Name, Please ensure input only have alphabtes and number"
            }
            else{
                pass = true;
            }
        }
        return [pass,err]
    }
    
    if(credName == 'password'){
        if(cred.length <8){
            err = "Password has to be at least 8 letters."
        }
        else if(cred.toLowerCase() == cred){
            err = "Password has to include both lower and capital letters."
        }
        else if (testNum(cred) == false ){
            err = "Password has to include at least one digit."
        }
        else if( passW(cred) == false ){
            err = "Password has to include at least one of following symbols: ['.', '_', '-']."
        }
        else{
            pass = true;
        }
        return [pass,err]
    }

    if(credName == 'comfirmPassword'){
        if(cred[1] == ""){
            err="Empty Comfirm Password! Please input Comfirm Password."
        }
        else if(cred[0] != cred[1]){
            err = "Password mismatch"
        }
        else{
            pass= true;
        }
        return [pass,err];
    }
}