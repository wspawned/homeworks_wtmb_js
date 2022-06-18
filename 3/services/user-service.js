const fs = require('fs');


module.exports = class UserService {
  constructor(dbPath) {
    this.dbPath = dbPath
  }

  save = function(data) {
    fs.writeFileSync(this.dbPath, JSON.stringify(data, null,4))
  } 

  findAll = function() {
    const file = fs.readFileSync(this.dbPath, {encoding: 'utf-8'})
    return JSON.parse(file)
  }

  add(item) {
    const allItems = this.findAll()

    allItems.push(item)

    this.save(allItems)

    return item
  }

  del(userName) {
    const allItems = this.findAll()
    const deleted = allItems.filter(p => p.name != userName)
    this.save(deleted)
  }

  find(userName) {
    const allItems = this.findAll()

    const result = allItems.find(p => p.name == userName)
    if(result== undefined) {
      console.log('User is missing')
    }
    else return result
  }

  findTweet(userName, tweetContent) { 
    const allItems = this.findAll()
    const user = allItems.find(p=> p.name == userName)
    if(user == undefined) {
      console.log('user doesnt exist')
    }
    else {
      const tweet = user.tweets.find(p=> p.content == tweetContent)
      if(tweet== undefined) {
        console.log('tweet doesnt exist')
      }
      else return tweet
    }
    // const tweet = user.find(p=> p.tweets == tweetContent)
    // if(tweet== undefined) {
    //   console.log('tweet does not exist')
    // }
    // else return tweet
  }

  clear = () => {
    let allItems = []
    this.save(allItems)
  }
}
