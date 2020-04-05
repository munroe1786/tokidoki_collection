class Character {
    constructor({ id, name, family, description, release_year, photo_url, series_id }) {
        this.id = id
        this.name = name
        this.family = family
        this.description = description
        this.release_year = release_year
        this.photo_url = photo_url
        this.series_id = series_id
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
                class=db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" class="ph2 ph0-ns pb3 link db">
                <h3 class="f5-ns mb0 black-90">${this.name}</h3>
                <h3 class="f6 f5 fw4 mt2 black-60">${this.family}</h3>
            </a>
            <p>button class="editCharacter" data-id="${this.id}">Edit Character</button></p>
            `
        return article
    }
}

let stellina = new Character({
    id: 1,
    name: "Stellina",
    family: "Unicorno",
    description: "Stars and a rainbow mane",
    release_year: "2012",
    photo_url: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/02/08/56b8d59df0137d854204dd16/m_56b8d59df0137d854204dd17.jpg",
    series_id: 1
})