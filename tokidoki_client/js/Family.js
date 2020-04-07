class Family {
    constructor({ id, name, photo_url }) {
        this.id = id
        this.name = name
        this.photo_url = photo_url
    }

    static getAll() {
        if(Family.all.length === 0) {
            FamilyAPI.getFamilies().then(families => {
                Family.all = families.map(familyAttributes => 
                    new Family(familyAttributes)
                )
                return Promise.resolve(Family.all)
            })
        } else {
            return Promise.resolve(Family.all)
        }
    }

    photoHtml() {
        return `<img src="${this.photo_url}" />`
    }  

    renderCard() {
        let article = document.createElement('article')
        article.class = "fl w-100 w-50-m w-25-ns pa2-ns"
        article.dataset['character_id'] = this.id
        article.innerHTML = `
            <div class="aspect-ratio aspect-ratio--1x1">
                <img style="background-image:url(${this.photo_url});"
                class="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" class="ph2 ph0-ns pb3 link db">
                <h3 class="f5 f4-ns mb0 black-90">${this.name}</h3>
            </a>
            <p><button class="editCharacter" data-id="${this.id}">Edit Character</button></p>
            `
        return article
    }
}

Family.all = []