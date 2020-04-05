class CharactersPage {
    
    constructor() {
        this.characters = []
        this.formState = {
            name: '',
            description: ''
        }
    }

    renderForm() {
        return `
            <form class="addCharacter">
                <h3>Add Character</h3>
                <p>
                    <label class="db">Name</label>
                    <input type="text" name="name" value="${this.formState.name}" />
                </p>
                <p>
                    <label class="db">Description</label>
                    <input type="text" name="description" value="${this.formState.description}" />
                </p>
                <input type="submit" value="Add Character" />
            </form>
        `
    }

    
    
    
    render() {
        return `
        <h1>Welcome to Tokidoki Collection</h1>
        ${this.renderForm()}
        `
    }
}