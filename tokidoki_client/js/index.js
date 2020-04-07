document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = new FamiliesPage().render()
})

//let unicorno = new Family({
 //   id: 1,
 //   name: "Unicorno",
 //   photo_url: "",
//})