const like = require('./like')

module.exports = class photo {
    constructor (content) {
        this.content = content
        this.likes = []
    }
    like(user) {
        
        const newLike = new like(user, this)
        this.likes.push(newLike)
        user.likes.push(newLike)

    }
}