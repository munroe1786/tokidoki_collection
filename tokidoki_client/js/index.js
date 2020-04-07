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