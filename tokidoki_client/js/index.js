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

}