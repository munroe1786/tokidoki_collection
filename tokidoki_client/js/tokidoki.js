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
        })
    }

    static createFamily(familyAttributes) {
        return fetch(`${FamilyAPI.base_url}/families`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(familyAttributes)
        })
        .then(res => res.json())
    }
}

FamilyAPI.base_url = "http://localhost:3000"

class CharacterAPI {
    static getCharacters() {
        return fetch(`${CharacterAPI.base_url}/characters`).then(res => res.json())
    }

    static createCharacter(characterAttributes) {
        return fetch(`${CharacterAPI.base_url}/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(characterAttributes)
        })
        .then(res => res.json())
    }
}

CharacterAPI.base_url = "http://localhost:3000"

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

    static findById(id) {
        return Family.all.find(family => family.id == id)
    }

    static create(familyAttributes) {
        return FamilyAPI.createFamily(familyAttributes)
            .then(familyJSON => {
                return new Family(familyJSON).save()
            })
    }

    save() {
        Character.all.push(this)
        return this
    }

    getFamilyDetails() {
        if(this.characters().length === 0) {
          return FamilyAPI.getFamilyShow(this.id)
            .then(({characters}) => {
                characters.map(characterAttributes => Character.findOrCreateBy(characterAttributes))
                return this
            })  
        } else {
            return Promise.resolve(this)
        }
    }

    characters() {
        return Character.all.filter(character => character.family_id == this.id)
    }

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
            <p><a href="#/families/${this.id}" class="familyShow ba1 pa2 bg-moon-gray
            link" data-familyid="${this.id}">Character Details</a></p>
            `
        return article.outerHTML
    }
}

Family.all = []

class Character {
    constructor({id, name, description, series, release_year, photo_url, family_id}) {
        this.id = id
        this.name = name
        this.description = description
        this.series = series
        this.release_year = release_year
        this.photo_url = photo_url
        this.family_id = family_id
    }

    static create(characterAttributes) {
        return CharacterAPI.createCharacter(characterAttributes)
            .then(characterJSON => {
                return new Character(characterJSON).save()
            })
    }

    static findOrCreateBy(attributes) {
    let found = Character.all.find(character => character.id == attributes.id)
    return found ? found : new Character(attributes).save()
    }

    save() {
        Character.all.push(this)
        return this
    }

    render() {
        return `
        <li>${this.name}</li>
        `
    }

}

Character.all = []

class FamiliesPage {
    
    constructor(families) {
        this.families = families
        //this.formState = {
            //name: '',
            //photo_url: ''
        //}
    }

    renderForm() {
        return `
            <form class="addFamily">
                <h3>Add a Family</h3>
                <p>
                    <label class="db">Name</label>
                    <input type="text" name="name" id="name" />
                </p>
                <p>
                    <label class="db">Photo</label>
                    <input type="text" name="photo_url" id="photo_url" />
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
        <section id ="families">
            ${this.renderList()}
        </section>    

    `
    }
}

class FamilyShowPage {
    constructor(family) {
        this.family = family
    }

    renderCharacterList() {
        let ul = document.createElement('ul')
        this.family.characters().forEach(character => {
            ul.insertAdjacentHTML('beforeend', character.render())
        })
        return ul.outerHTML
    }

    render() {
        return `
        <div class="aspect-ratio aspect-ratio--1x1">
            <img style="background-image:url(${this.family.photo_url});"
            class="db bg-center cover aspect-ratio--object" />
        </div>
        <div class="ph2 ph0-ns pb3 link db">
            <h3 class="f5 f4-ns mb0 black-90">${this.family.name}</h3>
        </div>
        ${this.renderCharacterList()}
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = loadingGif()
    Family.getAll().then(families => {
        root.innerHTML = new FamiliesPage(families).render()
    })
    document.addEventListener('click', (e) => {
        if(e.target.matches('.familyShow')) {
            let family = Family.findById(e.target.dataset.familyid)
            family.getFamilyDetails().then(family => {
                root.innerHTML = new FamilyShowPage(family).render()
            })
        }
        if(e.target.matches('.familiesIndex')) {
            root.innerHTML = new FamiliesPage(Family.all).render()
        }
    })
    document.addEventListener('submit', (e) => {
        e.preventDefault()
        if(e.target.matches('.addFamily')) {
            let formData = {}
            e.target.querySelectorAll('input[type="text"]').forEach(input => formData[input.id] = input.value)
            Family.create(formData)
                .then(family => {
                    document.querySelector('#families').insertAdjacentHTML('beforeend', family.renderCard())
                })
        }
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

