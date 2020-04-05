class FamiliesPage {
    
    constructor() {
        this.families = []
        this.formState = {
            name: '',
            photo_url: ''
        }
    }

    renderForm() {
        return `
            <form class="">
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