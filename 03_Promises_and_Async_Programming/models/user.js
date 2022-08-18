const tweet = require('./tweet')

module.exports = class user {
    constructor(name) {
        this.name = name
        this.tweets = []
    }

    share(content) {
        const resim = new tweet(content)
        this.tweets.push(resim)
    }
}