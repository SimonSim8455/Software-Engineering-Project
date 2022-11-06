
export default function ReadCSV(){
    const JS = require("./hdb.json")
    const JS2 = require("./malls3.json");
    const ab = {
        hdb:JS,
        mall:JS2
    }
    return ab;
}

