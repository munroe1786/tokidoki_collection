document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    root.innerHTML = new CharactersPage().render()
})

let stellina = new Character({
    id: 1,
    name: "Stellina",
    description: "Stars and a rainbow mane",
    series: "1",
    release_year: "2012",
    photo_url: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/02/08/56b8d59df0137d854204dd16/m_56b8d59df0137d854204dd17.jpg",
    family_id: 1
})