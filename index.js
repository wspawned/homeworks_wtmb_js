//SMTH LIKE INSTAGRAM

user = class {
    constructor(name) {
        this.name = name
        this.photos = []
        this.likes = []
    }

    share(content) {
        console.log(this.name + ' has just shared ' + content + ' photo')
        const resim = new photo(content)
        this.photos.push(resim)
    }

    printLikes() {
        // for(let i = 0; i < this.likes.length ; i++) {
        //     const like = this.likes[i]
        // }
        console.log('likes of ' + this.name)
        for(const like of this.likes) {
            like.print()
        }
    }
}

photo = class {
    constructor (content) {
        this.content = content
        this.likes = []
    }
    like(user) {
        console.log(user.name + ' just liked '+ this.content )
        const newLike = new like(user, this)
        this.likes.push(newLike)
        user.likes.push(newLike)

    }
}

like = class {
    constructor(user, photo) {
    this.user = user
    this.photo = photo
    }
    print() {
        console.log('i am the like of ' + this.user.name + ' under ' + this.photo.content)
    }
}




const irşad = new user('irşad')
const ali = new user('ali')
const hüseyin = new user('hüseyin')

irşad.share('kedi')
irşad.share('nargile')
hüseyin.share('roket')
irşad.share('kahve')

for(const photo of irşad.photos) {
    photo.like(ali)
}

ali.printLikes()