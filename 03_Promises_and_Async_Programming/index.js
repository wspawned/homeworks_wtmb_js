const user = require('./models/user')
const photo = require('./models/tweet')
const UserService = require('./services/user-service')
const userService = new UserService('users.json')

async function main() {
    const irşad = new user ('İrşad')
    const ali = new user ('Ali')
    const hüseyin = new user('Hüseyin')
  
    irşad.share('kedi')
    irşad.share('nargile')
    hüseyin.share('roket')
    irşad.share('kahve')

    // const irş = userService.find('İrşad')
    // console.log(irş)

    // userService.add(irşad)
    // userService.add(ali)
    // userService.add(hüseyin)

    // const hus = userService.del('Hüseyin')

    const irşadTweet = userService.findTweet('İrşad','kedi')
    console.log(irşadTweet)

    // userService.clear()
  
}
  
  main()
