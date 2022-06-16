const fs = require('fs')

const save = function(data) {
    fs.writeFileSync('likesofAli.json',JSON.stringify(data))
} 

const load = function(fileName) {
    fs.readFile(fileName,'utf8',function(err, data){
        console.log(err)
        let a = JSON.parse(data)
        console.log(data)
        console.log('hey ' + JSON.stringify(a) )
    })
}

module.exports = {save, load}