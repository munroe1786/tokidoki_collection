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

    render() {
        return `
        <h1>Welcome to Tokidoki Collection</h1>
        ${this.renderForm()}
        ${this.renderList()}
        `
    }
}