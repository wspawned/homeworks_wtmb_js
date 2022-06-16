const photo = require('./photo')

module.exports = class user {
    constructor(name) {
        this.name = name
        this.photos = []
        this.likes = []
    }

    share(content) {
        const resim = new photo(content)
        this.photos.push(resim)
    }

    printLikes() {
        console.log('likes of ' + this.name)
        for(const like of this.likes) {
            like.print()
        }
    }
}