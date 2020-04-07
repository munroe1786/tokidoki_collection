class FamilyAPI {
    static getFamilies() {
        return fetch(`${FamilyAPI.base_url}/families`).then(res => res.json())
    }

    static getFamilyShow(familyId) {
        return fetch(`${FamilyAPI.base_url}/families/${familyId}`)
        .then(res => res.json())
            .then(json => { 
                const { 
                    data: { 
                        id,
                        attributes: {
                        name, 
                        photo_url
                    } 
                }, 
                included
            } = json
            return {
                id,
                name,
                photo_url,
                characters: included.map(({id, attributes: {name, description, series, release_year, photo_url, family_id}}) => {
                    return {
                        id,
                        name,
                        description,
                        series,
                        release_year,
                        photo_url,
                        family_id
                    }
                })
            }
            debugger
            })
    }
}

FamilyAPI.base_url = "http://localhost:3000"

class Family {
    constructor({ id, name, photo_url }) {
        this.id = id
        this.name = name
        this.photo_url = photo_url
    }

    static getAll() {
        if(Family.all.length === 0) {
            return FamilyAPI.getFamilies().then(families => {
                Family.all = families.map(familyAttributes => 
                    new Family(familyAttributes)
                )
                return Family.all
            })
        } else {
            return Promise.resolve(Family.all)
        }
    }

    //photoHtml() {
    //    return `<img src="${this.photo_url}" />`
    //}  

    renderCard() {
        let article = document.createElement('article')
        article.className = "fl w-100 w-50-m w-25-ns pa2-ns"
        article.dataset['family_id'] = this.id
        article.innerHTML = `
            <div class="aspect-ratio aspect-ratio--1x1">
                <img style="background-image:url(${this.photo_url});"
                class="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" class="ph2 ph0-ns pb3 link db">
                <h3 class="f5 f4-ns mb0 black-90">${this.name}</h3>
            </a>
            <p><button class="editFamily" data-id="${this.id}">Edit Family</button></p>
            `
        return article.outerHTML
    }
}

Family.all = []

class FamiliesPage {
    
    constructor(families) {
        this.families = families
        this.formState = {
            name: '',
            photo_url: ''
        }
    }

    renderForm() {
        return `
            <form class="addFamily">
                <h3>Add a Family</h3>
                <p>
                    <label class="db">Name</label>
                    <input type="text" name="name" value="${this.formState.name}" />
                </p>
                <p>
                    <label class="db">Photo</label>
                    <input type="text" name="photo_url" value="${this.formState.photo_url}" />
                </p>
                <input type="submit" value="Add Family" />
            </form>
        `
    }

    renderList() {
        return this.families.map(family => {
            return family.renderCard()
        }).join('')
    }

    render() {
        return `
        <h1>Welcome to Tokidoki Collection</h1>
        ${this.renderForm()}
        ${this.renderList()}
    `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = loadingGif()
    Family.getAll().then(families => {
        root.innerHTML = new FamiliesPage(families).render()
    })
})

//let unicorno = new Family({
//    id: 1,
//    name: "Unicorno",
//    photo_url: "",
//})

const loadingGif = () => {
    let loading = document.createElement('img')
    loading.src = 'https://i.giphy.com/media/y1ZBcOGOOtlpC/giphy.webp'
    return loading.outerHTML
}

