document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    Family.getAll().then(families => {
        debugger
    })
    root.innerHTML = new FamiliesPage().render()
})

let unicorno = new Family({
    id: 1,
    name: "Unicorno",
    photo_url: "",
})