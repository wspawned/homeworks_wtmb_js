module.exports = class like {
    constructor(user, photo) {
    this.user = user.name
    this.photo = photo.content
    }
    print() {
        console.log('i am the like of ' + this.user + ' under ' + this.photo)
    }
    static create({user,photo}) {
        return new like (user,photo)
    }
}