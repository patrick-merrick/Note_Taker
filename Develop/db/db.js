const fs=require("fs")
const util=require("util")
class noteData{
    getNotes() {
     let readFileAsync =util.promisify(fs.readFile)
     return readFileAsync("db/db.json","utf8").then(notes=>{
         notes=[].concat(JSON.parse(notes))
         return notes;
     })
    }
}
module.exports=new noteData();