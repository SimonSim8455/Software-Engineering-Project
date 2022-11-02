import DummyUser from "../data/dummyUsers";

export default function CheckError(email, password){

    for(let i=0;i<DummyUser.userArr.length;i++){
        console.log(DummyUser.userArr[i].email);
        console.log(DummyUser.userArr[i].password);
        if(DummyUser.userArr[i].email == email &&  DummyUser.userArr[i].password == password){
            return [true,i];
        }
    }
    return [false,-1];
    
}