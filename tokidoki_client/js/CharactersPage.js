class CharactersPage {
    
    constructor() {
        this.characters = []
        this.formState = {
            name: '',
            family: ''
        }
    }

    renderForm() {
        return `
            <form class="addCharacter">
                <p>
                    <label>Name</label>
                    <input type="text" name="name" value="${this.formState.name}" />
                </p>
                <p>
                    <label>Family</label>
                    <input type="text" name="family" value="${this.formState.family}" />
                </p>
                <input type="submit" value="Add Character" />
            </form>
        `
    }

    
    
    
    render() {
        return `
        <h1>Hello from Characters Page</h1>
        `
    }
}