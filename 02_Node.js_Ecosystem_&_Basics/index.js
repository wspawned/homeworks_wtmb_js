const user = require('./user')
const photo = require('./photo')
const like = require('./like')
const database = require('./database')


const irşad = new user('irşad')
const ali = new user('ali')
const hüseyin = new user('hüseyin')

irşad.share('kedi')
irşad.share('nargile')
hüseyin.share('roket')
irşad.share('kahve')

// for(const photo of irşad.photos) {
//     photo.like(ali)
// }

database.load('./likesofAli.json')

ali.printLikes()