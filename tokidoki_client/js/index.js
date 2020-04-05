document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = new FamiliesPage().render()
})

let unicorno = new Family({
    id: 1,
    name: "Unicorno",
    photo_url: "https://cdn.shopify.com/s/files/1/2429/5791/files/ch-logo-3.png?v=1539599448",
})